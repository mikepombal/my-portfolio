import gql from 'graphql-tag';

gql`
  mutation insertTicket(
    $ticket: String!
    $name: String!
    $ticket_type: ticket_type_enum_enum!
    $market: market_enum_enum!
    $currency: currency_enum!
  ) {
    insert_tickets_one(
      object: {
        name: $name
        ticket: $ticket
        ticket_type: $ticket_type
        market: $market
        currency: $currency
      }
    ) {
      ticket
      name
      ticket_type
      market
      currency
    }
  }
`;

gql`
  mutation updateTicket(
    $ticket: String!
    $name: String!
    $ticket_type: ticket_type_enum_enum!
    $market: market_enum_enum!
    $currency: currency_enum!
  ) {
    update_tickets_by_pk(
      _set: { name: $name, ticket_type: $ticket_type, currency: $currency }
      pk_columns: { ticket: $ticket, market: $market }
    ) {
      ticket
      market
      name
      ticket_type
      currency
    }
  }
`;

gql`
  mutation updateTicketPrice(
    $ticket: String!
    $market: market_enum_enum!
    $price: String!
    $timestamp: timestamptz!
  ) {
    update_tickets_by_pk(
      _set: { latest_price: $price, price_timestamp: $timestamp }
      pk_columns: { ticket: $ticket, market: $market }
    ) {
      ticket
      market
      latest_price
      price_timestamp
    }
  }
`;
