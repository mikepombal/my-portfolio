import gql from 'graphql-tag';

gql`
  mutation insertTicket(
    $ticket: String!
    $name: String!
    $ticket_type: ticket_type_enum_enum!
    $market: market_enum_enum!
  ) {
    insert_tickets_one(
      object: {
        name: $name
        ticket: $ticket
        ticket_type: $ticket_type
        market: $market
      }
    ) {
      ticket
      name
      ticket_type
      market
    }
  }
`;

gql`
  mutation updateTicket(
    $ticket: String!
    $name: String!
    $ticket_type: ticket_type_enum_enum!
    $market: market_enum_enum!
  ) {
    update_tickets_by_pk(
      _set: { name: $name, ticket_type: $ticket_type, market: $market }
      pk_columns: { ticket: $ticket }
    ) {
      ticket
      name
      ticket_type
      market
    }
  }
`;
