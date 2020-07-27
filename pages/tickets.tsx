import useUser from '../lib/useUser';
import Layout from '../components/Layout';
import TicketsList from '../components/tickets/TicketsList';
import TicketForm from '../components/tickets/TicketForm';

const Tickets = () => {
  const { user } = useUser({ redirectTo: '/login' });

  return (
    <Layout>
      {!user || user.isLoggedIn === false ? (
        <div>loading...</div>
      ) : (
        <>
          <h1>Tickets</h1>
          <TicketsList />
          <TicketForm />
        </>
      )}
    </Layout>
  );
};

export default Tickets;
