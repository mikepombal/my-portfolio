import {
  useGetActivitiesForTicketQuery,
  Activities,
  Activity_Enum_Enum,
  Market_Enum_Enum,
} from '../../types/generated/graphql';
import Money from '../common/Money';
import { Text } from './Text';

const splitValue = (value: number, quantity: number): number[] => {
  const floor = Math.floor((value * 100) / quantity);
  return new Array(quantity)
    .fill(floor)
    .reduce<{ list: number[]; toAlocate: number }>(
      (acc, n) => ({
        list: [...acc.list, acc.toAlocate > 0 ? n + 1 : n],
        toAlocate: Math.max(0, acc.toAlocate - 1),
      }),
      { list: [], toAlocate: value * 100 - floor * quantity }
    )
    .list.map((n) => n / 100);
};

type Activity = Array<
  Pick<Activities, 'market' | 'ticket' | 'type' | 'quantity' | 'totalValue'>
>;

const defineList = (activities: Activity): number[] => {
  return activities.reduce<number[]>((acc, a) => {
    if (a.type !== Activity_Enum_Enum.Buy) {
      return acc;
    }
    return [...acc, ...splitValue(a.totalValue, a.quantity)]; // NEED TO CONSIDER QUANTITY
  }, []);
};

const calculateAverage = (holdings: number[]): number =>
  holdings.length
    ? holdings.map((x) => x * 100).reduce((acc, v) => acc + v, 0) /
      (holdings.length * 100)
    : 0;

const sumDividends = (activities: Activity): number =>
  activities.reduce(
    (acc, a) => (a.type === Activity_Enum_Enum.Div ? acc + a.totalValue : acc),
    0
  );

interface TicketsListProps {
  market: string;
  ticket: string;
  value?: string;
}
export const TicketsList: React.FC<TicketsListProps> = ({
  market,
  ticket,
  value,
}) => {
  const { loading, data } = useGetActivitiesForTicketQuery({
    variables: { market, ticket },
  });

  if (loading) {
    return (
      <div className="p-4">{`Loading list of holdings for ${market}:${ticket} ...`}</div>
    );
  }

  if (!data) {
    return (
      <div className="p-4">{`There is no data for ${market}:${ticket} ...`}</div>
    );
  }

  if (data.activities.length === 0) {
    return (
      <div className="p-4">{`There is no holdings for ${market}:${ticket} ...`}</div>
    );
  }

  const holdings = defineList(data.activities);
  const average = calculateAverage(holdings);
  const diff = value
    ? ((parseFloat(value) - average) * 100) / parseFloat(value)
    : null;
  const dividends = sumDividends(data.activities);

  return (
    <div>
      <div className="flex">
        <Text>Holdings x {holdings.length}</Text>
        <Text>
          Average:{' '}
          <Money
            value={average.toString()}
            market={market as Market_Enum_Enum}
          />
        </Text>
        <Text color={diff === null ? undefined : diff < 0 ? 'warning' : 'good'}>
          {diff === null ? 'N/A' : `${diff.toFixed(2)}%`}
        </Text>
        <Text>
          Dividends:{' '}
          <Money
            value={dividends.toString()}
            market={market as Market_Enum_Enum}
          />
        </Text>
      </div>
      {holdings.map((a, index) => (
        <div key={index}>{a}</div>
      ))}{' '}
    </div>
  );
};
