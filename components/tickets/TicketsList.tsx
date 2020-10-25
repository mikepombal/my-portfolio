import {
  useAllTicketsQuery,
  InsertTicketMutationVariables,
} from '../../types/generated/graphql';

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
    <>
      <div className="mt-8 flex bg-green-300 font-bold h-10 border-2 border-gray-800">
        <div className={`${commonStyle} w-24`}>Ticket</div>
        <div className={`${commonStyle} w-64`}>Name</div>
        <div className={`${commonStyle} w-24`}>Type</div>
        <div className={`${commonStyle} w-24`}>Market</div>
        <div className={`${commonStyle} w-16`}>Edit</div>
      </div>
      <ul className="border-l-2 border-r-2 border-b-2 border-gray-800">
        {data?.tickets.map((ticket) => (
          <li
            key={ticket.ticket}
            className="flex h-10 border-gray-800 border-dotted border-b"
          >
            <div className={`${commonStyle} w-24`}>{ticket.ticket}</div>
            <div className={`${commonStyle} w-64`}>{ticket.name}</div>
            <div className={`${commonStyle} w-24`}>{ticket.ticket_type}</div>
            <div className={`${commonStyle} w-24`}>{ticket.market}</div>
            <div className={`${commonStyle} w-16`}>
              <button onClick={() => selectTicket(ticket)}>edit</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TicketsList;
