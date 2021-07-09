import {
  GetActivitiesForTicketQuery,
  Currency_Enum,
} from '../../types/generated/graphql';
import Money from '../common/Money';
import { calculateDividendsPerShare } from '../../utils/calculations';

const dividendColors = ['#fbbf24', '#fcd34d'];

interface SharesListProps {
  average: number;
  maxValue: number;
  holdings: number[];
  data: GetActivitiesForTicketQuery;
  value?: number;
}
export const SharesList: React.FC<SharesListProps> = ({
  average,
  maxValue,
  value,
  holdings,
  data,
}) => {
  const dividendsPerShare = calculateDividendsPerShare(
    data.activities,
    holdings.length
  );

  return (
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
              value - average < 0 ? 'border-red-400' : 'border-green-400'
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
              className="border-2 border-yellow-600 mt-2 p-3 flex justify-between bg-gray-100"
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
                <Money value={value.toString()} currency={Currency_Enum.Gbx} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
