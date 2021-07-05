import gql from 'graphql-tag';

gql`
  query allTickets {
    tickets(order_by: { ticket: asc }) {
      name
      ticket
      ticket_type
      market
      latest_price
      currency
    }
  }
`;

gql`
  query pricesToUpdate {
    prices_update_due {
      ticket
    }
  }
`;

gql`
  query getTicket($market: market_enum_enum!, $ticket: String!) {
    tickets_by_pk(market: $market, ticket: $ticket) {
      market
      ticket
      name
      ticket_type
      latest_price
      currency
    }
  }
`;
