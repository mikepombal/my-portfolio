import { useAllTicketsQuery } from '../../types/generated/graphql';

const TicketsList = () => {
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
};

export default TicketsList;
