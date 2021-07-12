import {
  useGetActivitiesForTicketQuery,
  Activities,
  Activity_Enum_Enum,
  Currency_Enum,
} from '../../types/generated/graphql';
import Money from '../common/Money';
import {
  splitValue,
  calculateAverage,
  sumDividends,
} from '../../utils/calculations';
import { SharesList } from './SharesList';
import { Text } from './Text';
import { Dispatch, ReactElement, useState } from 'react';

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

interface RadioButtonProps {
  label: string;
  setValue: () => void;
  isSelected: boolean;
}
const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  setValue,
  isSelected,
}) => (
  <button
    className={` border-2 px-4 py-2 mr-2 rounded-full ${
      isSelected
        ? 'border-green-700 bg-green-700 text-white'
        : 'border-green-700 bg-green-200 text-gray-700'
    }`}
    onClick={() => setValue()}
  >
    {label}
  </button>
);

type View = 'List' | 'Dividends';

interface TicketsListProps {
  market: string;
  ticket: string;
  value?: number;
}
export const SharesDetails: React.FC<TicketsListProps> = ({
  market,
  ticket,
  value,
}) => {
  const { loading, data } = useGetActivitiesForTicketQuery({
    variables: { market, ticket },
  });
  const [view, setView] = useState<View>('List');

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

  const getView = (view: View): ReactElement => {
    switch (view) {
      case 'List':
        return (
          <SharesList
            average={average}
            data={data}
            holdings={holdings}
            maxValue={maxValue}
            value={value}
          />
        );
      case 'Dividends':
        return <div>Dividends</div>;
    }
  };

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

      <div className="flex ml-2 mt-2">
        <RadioButton
          label="Shares List"
          setValue={() => setView('List')}
          isSelected={view === 'List'}
        />
        <RadioButton
          label="Dividends"
          setValue={() => setView('Dividends')}
          isSelected={view === 'Dividends'}
        />
      </div>

      {getView(view)}
    </div>
  );
};
