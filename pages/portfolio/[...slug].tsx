import { useRouter } from 'next/router';
import { Market_Enum_Enum } from '../../types/generated/graphql';
import { capitaliseString } from '../../utils/common';
import useUser from '../../lib/useUser';
import Layout from '../../components/Layout';
import TicketHoldings from '../../components/portfolio/TicketHoldings';

const PortfilioTicket: React.FC<{ noApollo: boolean }> = ({
  noApollo,
}): JSX.Element => {
  useUser({ redirectTo: '/login' });
  const router = useRouter();

  const { slug } = router.query;

  return (
    <Layout>
      {noApollo ? (
        <div>loading...</div>
      ) : !Array.isArray(slug) ||
        slug.length < 2 ||
        !(capitaliseString(slug[0]) in Market_Enum_Enum) ? (
        'Error with the ticket request... please check it follows this rule `portfolio/[market]/[ticket] and is a valid combination`'
      ) : (
        <div className="w-full p-8">
          <TicketHoldings
            market={slug[0].toUpperCase()}
            ticket={slug[1].toUpperCase()}
          />
        </div>
      )}
    </Layout>
  );
};

export default PortfilioTicket;
