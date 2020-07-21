import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import useUser from '../lib/useUser';
import Layout from '../components/Layout';

const ALL_TICKETS_QUERY = gql`
  query allTickets {
    tickets {
      name
      ticket
    }
  }
`;

const Tickets = () => {
  const { user } = useUser({ redirectTo: '/login' });
  const { loading, data } = useQuery(ALL_TICKETS_QUERY);

  if (!user || user.isLoggedIn === false) {
    return <Layout>loading...</Layout>;
  }

  return (
    <Layout>
      <h1>Ticket</h1>
      {loading ? (
        <div>Loading</div>
      ) : (
        <ul>
          {data.tickets.map(({ ticket, name }) => (
            <li key={ticket}>{`${name} (${ticket})`}</li>
          ))}
        </ul>
      )}
    </Layout>
  );
};

export default Tickets;
