import useUser from '../lib/useUser';
import Layout from '../components/Layout';
import TicketsList from '../components/TicketsList';

const Tickets = () => {
  const { user } = useUser({ redirectTo: '/login' });

  if (!user || user.isLoggedIn === false) {
    return <Layout>loading...</Layout>;
  }

  return (
    <Layout>
      <h1>Ticket</h1>
      <TicketsList />
    </Layout>
  );
};

export default Tickets;
