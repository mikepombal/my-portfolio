import Link from 'next/link';
import {
  useAllTicketsQuery,
  InsertTicketMutationVariables,
} from '../../types/generated/graphql';
import Money from '../common/Money';

const commonStyle =
  'flex justify-center items-center h-full border-r border-dashed border-gray-800';

interface Prop {
  selectTicket: (arg0: InsertTicketMutationVariables) => void;
}

const TicketsList: React.FC<Prop> = ({ selectTicket }) => {
  const { loading, data } = useAllTicketsQuery();

  return loading ? (
    <div>Loading</div>
  ) : (
    <div className="flex flex-col h-full">
      <div className="flex bg-green-300 font-bold border-2 border-gray-800 flex-grow-0">
        <div className={`${commonStyle} w-24 py-2`}>Ticket</div>
        <div className={`${commonStyle} w-64 py-2`}>Name</div>
        <div className={`${commonStyle} w-24 py-2`}>Type</div>
        <div className={`${commonStyle} w-24 py-2`}>Market</div>
        <div className={`${commonStyle} w-24 py-2`}>Currency</div>
        <div className={`${commonStyle} w-24 py-2`}>Latest</div>
        <div className={`${commonStyle} w-20 py-2`}>Holdings</div>
        <div className={`${commonStyle} w-16 py-2`}>Edit</div>
      </div>
      <ul className="border-l-2 border-r-2 border-b-2 border-gray-800 flex-grow overflow-scroll">
        {data?.tickets.map((ticket) => (
          <li
            key={ticket.ticket}
            className="flex h-10 border-gray-800 border-dotted border-b"
          >
            <div className={`${commonStyle} w-24`}>{ticket.ticket}</div>
            <div className={`${commonStyle} w-64`}>{ticket.name}</div>
            <div className={`${commonStyle} w-24`}>{ticket.ticket_type}</div>
            <div className={`${commonStyle} w-24`}>{ticket.market}</div>
            <div className={`${commonStyle} w-24`}>{ticket.currency}</div>
            <div className={`${commonStyle} w-24`}>
              {typeof ticket.latest_price === 'string' && (
                <Money value={ticket.latest_price} currency={ticket.currency} />
              )}
            </div>
            <Link href={`/portfolio/${ticket.market}/${ticket.ticket}`}>
              <div className={`${commonStyle} w-20 cursor-pointer`}>
                holdings
              </div>
            </Link>
            <div className={`${commonStyle} w-16`}>
              <button onClick={() => selectTicket(ticket)}>edit</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketsList;
