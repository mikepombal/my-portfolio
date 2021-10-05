import {
  useGetTicketQuery,
  Market_Enum,
  Currency_Enum,
} from '../../types/generated/graphql';
import Money from '../common/Money';
import { Text } from './Text';
import { SharesDetails } from './SharesDetails';

interface TicketHoldingsProps {
  market: string;
  ticket: string;
}
const TicketHoldings: React.FC<TicketHoldingsProps> = ({
  market,
  ticket,
}): JSX.Element => {
  const { loading, data } = useGetTicketQuery({
    variables: { ticket, market: market as Market_Enum },
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
            <Money value={d.latest_price} currency={d.currency} />
          ) : (
            'N/A'
          )}
        </Text>
      </div>
      <SharesDetails
        market={market}
        ticket={ticket}
        value={
          d.latest_price
            ? parseFloat(d.latest_price) *
              (d.currency !== Currency_Enum.Gbx ? 100 : 1)
            : undefined
        }
      />
    </>
  );
};

export default TicketHoldings;
