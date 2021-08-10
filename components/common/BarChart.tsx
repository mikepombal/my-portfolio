interface BarChartProps {
  height: string;
  values: Array<{ label: string; value: number }>;
}
export const BarChart: React.FC<BarChartProps> = ({ height, values }) => {
  const maxValue = Math.max(...values.map((o) => o.value));

  return (
    <div
      className="w-full border-2 border-yellow-600 bg-gray-100 px-4 py-8 rounded-xl overflow-x-scroll overflow-y-hidden"
      style={{ height }}
    >
      <div className="flex h-full relative">
        {values.length ? (
          values.map(({ label, value }, index) => {
            const height = (value * 100) / maxValue;
            return (
              <div
                key={`bar-${index}`}
                className="relative border-b-2 border-gray-400 flex-1"
                style={{
                  top: `${100 - height}%`,
                  height: `${height}%`,
                }}
              >
                <div className="relative border-t-2 border-l-2 border-r-2 h-full border-green-500 bg-green-200 flex-1 mx-4" />
                <div
                  className="flex justify-center relative"
                  style={{
                    top: '-100%',
                    marginTop: '-1.5rem',
                    fontSize: '0.9rem',
                  }}
                >
                  {value}
                </div>
                <div
                  className="flex justify-center relative pt-2 mx-1"
                  style={{ top: '0%', fontSize: '0.9rem' }}
                >
                  {label}
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex justify-center w-full items-center">
            No values found!
          </div>
        )}
      </div>
      {/* <div className="w-full border-b-2 border-gray-400" /> */}
    </div>
  );
};
