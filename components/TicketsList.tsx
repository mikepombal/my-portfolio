import { useAllTicketsQuery } from '../types/generated/graphql';

export default function TicketsList() {
  const { loading, data } = useAllTicketsQuery();

  return loading ? (
    <div>Loading</div>
  ) : (
    <ul>
      {data.tickets.map(({ ticket, name }) => (
        <li key={ticket}>{`${name} (${ticket})`}</li>
      ))}
    </ul>
  );
}
