import { format } from 'date-fns';
import { Activity_Enum } from '../../types/generated/graphql';
import { Activity } from '../../types/common';
import { BarChart } from '../common/BarChart';

interface TicketDividendsProps {
  activities: Activity;
}
export const TicketDividends: React.FC<TicketDividendsProps> = ({
  activities,
}) => {
  const dividendActivities = activities
    .filter((a) => a.type === Activity_Enum.Div)
    .map(({ totalValue, quantity, date }) => ({
      totalValue,
      quantity,
      date,
      dividendPerShare: Math.round((totalValue * 10) / quantity) / 10,
    }));

  const divPerShare = dividendActivities.map((d) => ({
    label: format(new Date(d.date), 'MM/yy'),
    value: d.dividendPerShare,
  }));
  const shareQantity = dividendActivities.map((d) => ({
    label: format(new Date(d.date), 'MM/yy'),
    value: d.quantity,
  }));
  const totalDiv = dividendActivities.map((d) => ({
    label: format(new Date(d.date), 'MM/yy'),
    value: d.totalValue,
  }));

  return (
    <div className="ml-2">
      <div className="mt-4">
        <div className="w-full flex justify-center font-bold">
          Dividend Values per Shares
          <span className="italic ml-2 font-normal">(value in pennies)</span>
        </div>
        <BarChart height="10rem" values={divPerShare} />
      </div>
      <div className="mt-4">
        <div className="w-full flex justify-center font-bold">
          Quantity of Shares
        </div>
        <BarChart height="10rem" values={shareQantity} />
      </div>
      <div className="mt-4">
        <div className="w-full flex justify-center font-bold">
          Total Dividends
          <span className="italic ml-2 font-normal">(value in pennies)</span>
        </div>
        <BarChart height="20rem" values={totalDiv} />
      </div>
    </div>
  );
};
