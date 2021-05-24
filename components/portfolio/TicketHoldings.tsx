import {
  useGetTicketQuery,
  Market_Enum_Enum,
} from '../../types/generated/graphql';
import Money from '../common/Money';
import { Text } from './Text';
import { TicketsList } from './TicketsList';

interface TicketHoldingsProps {
  market: string;
  ticket: string;
}
const TicketHoldings: React.FC<TicketHoldingsProps> = ({
  market,
  ticket,
}): JSX.Element => {
  const { loading, data } = useGetTicketQuery({
    variables: { ticket, market: market as Market_Enum_Enum },
  });

  if (loading) {
    return <>Loading...</>;
  }

  if (!data?.tickets_by_pk) {
    return <>{`There is no data for ${market}:${ticket}`}</>;
  }

  const d = data.tickets_by_pk;
  return (
    <>
      <div className="flex">
        <Text>{`${d.market}:${d.ticket}`}</Text>
        <Text className="flex-auto">{d.name}</Text>
        <Text>
          Current:{' '}
          {d.latest_price ? (
            <Money value={d.latest_price} market={market as Market_Enum_Enum} />
          ) : (
            'N/A'
          )}
        </Text>
      </div>
      <TicketsList
        market={market}
        ticket={ticket}
        value={d.latest_price ?? undefined}
      />
    </>
  );
};

export default TicketHoldings;
