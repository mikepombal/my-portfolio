import {
  useGetActivitiesForTicketQuery,
  Activities,
  Activity_Enum_Enum,
} from '../../types/generated/graphql';

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

const defineList = (
  activities: Array<
    Pick<Activities, 'market' | 'ticket' | 'type' | 'quantity' | 'totalValue'>
  >
): number[] => {
  return activities.reduce<number[]>((acc, a) => {
    if (a.type !== Activity_Enum_Enum.Buy) {
      return acc;
    }
    return [...acc, ...splitValue(a.totalValue, a.quantity)]; // NEED TO CONSIDER QUANTITY
  }, []);
};

interface TicketsListProps {
  market: string;
  ticket: string;
}
export const TicketsList: React.FC<TicketsListProps> = ({ market, ticket }) => {
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

  return (
    <div className="p-4">
      {defineList(data.activities).map((a, index) => (
        <div key={index}>{a}</div>
      ))}{' '}
    </div>
  );
};
