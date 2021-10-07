import {
  useAllActivitiesQuery,
  Activity_Enum,
  Currency_Enum,
} from '../../types/generated/graphql';
import Money from '../common/Money';

const commonStyle =
  'flex justify-center items-center h-full border-r border-dashed border-gray-800';

const ActivitiesList: React.FC = () => {
  const { loading, data } = useAllActivitiesQuery();

  return loading ? (
    <div>Loading</div>
  ) : (
    <div className="flex flex-col h-full">
      <div className="flex bg-green-300 font-bold border-2 border-gray-800 flex-grow-0">
        <div className={`${commonStyle} w-24 py-2`}>Date</div>
        <div className={`${commonStyle} w-24 py-2`}>Ticket</div>
        <div className={`${commonStyle} w-24 py-2`}>Market</div>
        <div className={`${commonStyle} w-24 py-2`}>Type</div>
        <div className={`${commonStyle} w-24 py-2`}>Quantity</div>
        <div className={`${commonStyle} w-24 py-2`}>Value</div>
      </div>
      <ul className="border-2 border-t-0 border-gray-800 flex-grow overflow-scroll">
        {data?.activities.map((activity) => (
          <li
            key={activity.id}
            className={`flex h-10 border-gray-800 border-dotted border-b ${
              activity.type === Activity_Enum.Div ? 'bg-green-200' : ''
            }`}
          >
            <div className={`${commonStyle} w-24`}>
              {new Date(activity.date).toLocaleDateString()}
            </div>
            <div className={`${commonStyle} w-24`}>{activity.ticket}</div>
            <div className={`${commonStyle} w-24`}>{activity.market}</div>
            <div className={`${commonStyle} w-24`}>{activity.type}</div>
            <div className={`${commonStyle} w-24`}>{activity.quantity}</div>
            <div className={`${commonStyle} w-24`}>
              <Money value={activity.totalValue} currency={Currency_Enum.Gbx} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivitiesList;
