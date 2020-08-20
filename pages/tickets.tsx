import useUser from '../lib/useUser';
import Layout from '../components/Layout';
import TicketsManagement from '../components/tickets/TicketsManagement';

const Tickets = ({ noApollo }) => {
  useUser({ redirectTo: '/login' });

  return (
    <Layout>
      {noApollo ? (
        <div>loading...</div>
      ) : (
        <>
          <h1>Tickets</h1>
          <TicketsManagement />
        </>
      )}
    </Layout>
  );
};

export default Tickets;
