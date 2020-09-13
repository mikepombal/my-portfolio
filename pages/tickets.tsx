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
        <div className="w-full p-8">
          <h1 className="w-full p-4 font-bold text-2xl border-indigo-700 border-4 rounded-lg bg-indigo-500 text-white">
            Tickets
          </h1>
          <TicketsManagement />
        </div>
      )}
    </Layout>
  );
};

export default Tickets;
