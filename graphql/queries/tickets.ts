import gql from 'graphql-tag';

gql`
  query allTickets {
    tickets(order_by: { ticket: asc }) {
      name
      ticket
      ticket_type
      market
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
