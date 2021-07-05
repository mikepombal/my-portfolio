import {
  useGetActivitiesForTicketQuery,
  Activities,
  Activity_Enum_Enum,
  Currency_Enum,
} from '../../types/generated/graphql';
import Money from '../common/Money';
import { Text } from './Text';

const splitValue = (value: number, quantity: number): number[] => {
  const floor = Math.floor(value / quantity);
  return new Array(quantity)
    .fill(floor)
    .reduce<{ list: number[]; toAlocate: number }>(
      (acc, n) => ({
        list: [...acc.list, acc.toAlocate > 0 ? n + 1 : n],
        toAlocate: Math.max(0, acc.toAlocate - 1),
      }),
      { list: [], toAlocate: value - floor * quantity }
    ).list;
};

type Activity = Array<
  Pick<Activities, 'market' | 'ticket' | 'type' | 'quantity' | 'totalValue'>
>;

const defineList = (activities: Activity): number[] => {
  return activities.reduce<number[]>((acc, a) => {
    if (a.type !== Activity_Enum_Enum.Buy) {
      return acc;
    }
    return [...acc, ...splitValue(a.totalValue, a.quantity)];
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

const calculateDividendsPerShare = (
  activities: Activity,
  length: number
): number[][] => {
  return activities.reduce<number[][]>((acc, a) => {
    if (a.type !== Activity_Enum_Enum.Div) {
      return acc;
    }
    const split = splitValue(a.totalValue, a.quantity);
    return acc.map((d, i) => (i >= split.length ? d : [...d, split[i]])); // NEED TO CONSIDER QUANTITY
  }, new Array(length).fill([]));
};

const dividendColors = ['#fbbf24', '#fcd34d'];

interface TicketsListProps {
  market: string;
  ticket: string;
  value?: number;
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
  const diff = value ? ((value - average) * 100) / value : null;
  const dividends = sumDividends(data.activities);
  const maxValue = Math.max(...holdings, value ?? 0);
  const dividendsPerShare = calculateDividendsPerShare(
    data.activities,
    holdings.length
  );

  return (
    <div>
      <div className="flex">
        <Text>Holdings x {holdings.length}</Text>
        <Text>
          Average:{' '}
          <Money value={average.toString()} currency={Currency_Enum.Gbx} />
        </Text>
        <Text color={diff === null ? undefined : diff < 0 ? 'warning' : 'good'}>
          {diff === null ? 'N/A' : `${diff.toFixed(2)}%`}
        </Text>
        <Text>
          Dividends:{' '}
          <Money value={dividends.toString()} currency={Currency_Enum.Gbx} />
        </Text>
      </div>
      <div className="p-4 mt-2">
        <div className="relative">
          <div
            className="border-l-4 border-dashed border-gray-400 absolute"
            style={{
              width: '0',
              height: '100%',
              left: `${(average * 100) / maxValue}%`,
            }}
          />
          {value && (
            <div
              className={`border-l-4 border-dashed ${
                diff || 0 < 0 ? 'border-red-400' : 'border-green-400'
              } absolute`}
              style={{
                width: '0',
                height: '100%',
                left: `${(value * 100) / maxValue}%`,
              }}
            />
          )}
          {holdings.map((value, index) => {
            const background = dividendsPerShare[index].reduce<{
              str: string;
              sum: number;
            }>(
              (acc, d, i) => {
                const sum = acc.sum + d;
                const step = (sum * 100) / value;
                const str = `${acc.str}, ${dividendColors[i % 2]} ${step}%, ${
                  dividendColors[(i + 1) % 2]
                } ${step}%`;
                return { str, sum };
              },
              { str: '', sum: 0 }
            );
            return (
              <div
                className="border-2 border-yellow-600 mt-2 p-3 flex justify-between"
                style={{
                  width: `${(value * 100) / maxValue}%`,
                  background: `linear-gradient(to right ${
                    background.str
                  }, #f3f4f6 ${(background.sum * 100) / value}%)`,
                }}
                key={index}
              >
                <div className="bg-gray-100 bg-opacity-40 z-10 pl-1 pr-1 italic text-gray-600">
                  <Money
                    value={background.sum.toString()}
                    currency={Currency_Enum.Gbx}
                  />
                  {` (${((background.sum * 100) / value).toFixed(1)}%)`}
                </div>
                <div className="bg-gray-100 z-10 pl-1 pr-1 font-bold">
                  <Money
                    value={value.toString()}
                    currency={Currency_Enum.Gbx}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
