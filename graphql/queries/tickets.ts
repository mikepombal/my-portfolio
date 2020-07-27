import gql from 'graphql-tag';

gql`
  query allTickets {
    tickets {
      name
      ticket
    }
  }
`;
