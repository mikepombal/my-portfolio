import gql from 'graphql-tag';

gql`
  mutation insertTicket($ticket: String!, $name: String!) {
    insert_tickets_one(object: { name: $name, ticket: $ticket }) {
      name
      ticket
    }
  }
`;
