import { Activity_Enum_Enum } from '../../types/generated/graphql';
import { Activity } from '../../types/common';

interface TicketDividendsProps {
  activities: Activity;
}
export const TicketDividends: React.FC<TicketDividendsProps> = ({
  activities,
}) => {
  const dividendActivities = activities
    .filter((a) => a.type === Activity_Enum_Enum.Div)
    .map(({ totalValue, quantity, date }) => ({
      totalValue,
      quantity,
      date,
      dividendPerShare: Math.round((totalValue * 10) / quantity),
    }));

  return (
    <div className="mt-2 ml-2">
      {dividendActivities.map((a, i) => (
        <div key={i}>{a.dividendPerShare}</div>
      ))}
    </div>
  );
};
