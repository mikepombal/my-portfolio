import gql from 'graphql-tag';

export const ALL_TICKETS_QUERY = gql`
  query allTickets {
    tickets {
      name
      ticket
    }
  }
`;
