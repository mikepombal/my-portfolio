import { useAllTicketsQuery } from '../../types/generated/graphql';

const TicketsList = ({ selectTicket }) => {
  const { loading, data } = useAllTicketsQuery();

  return loading ? (
    <div>Loading</div>
  ) : (
    <ul>
      {data.tickets.map((ticket) => (
        <li key={ticket.ticket}>
          {`${ticket.name} (${ticket.ticket})`}
          <button onClick={() => selectTicket(ticket)}>edit</button>
        </li>
      ))}
    </ul>
  );
};

export default TicketsList;
