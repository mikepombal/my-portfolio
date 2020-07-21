import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const ALL_TICKETS_QUERY = gql`
  query allTickets {
    tickets {
      name
      ticket
    }
  }
`;

export default function TicketsList() {
  const { loading, data } = useQuery(ALL_TICKETS_QUERY);

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
