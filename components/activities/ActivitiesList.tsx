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
    <>
      <div className="mt-8 flex bg-green-300 font-bold h-10 border-2 border-gray-800">
        <div className={`${commonStyle} w-24`}>Date</div>
        <div className={`${commonStyle} w-24`}>Ticket</div>
        <div className={`${commonStyle} w-24`}>Market</div>
        <div className={`${commonStyle} w-24`}>Type</div>
        <div className={`${commonStyle} w-24`}>Quantity</div>
        <div className={`${commonStyle} w-24`}>Value</div>
      </div>
      <ul className="border-l-2 border-r-2 border-b-2 border-gray-800">
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
    </>
  );
};

export default ActivitiesList;
