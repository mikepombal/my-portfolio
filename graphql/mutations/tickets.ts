import gql from 'graphql-tag';

gql`
  mutation insertTicket($ticket: String!, $name: String!) {
    insert_tickets_one(object: { name: $name, ticket: $ticket }) {
      name
      ticket
    }
  }
`;

gql`
  mutation updateTicket($ticket: String!, $name: String!) {
    update_tickets_by_pk(
      _set: { name: $name }
      pk_columns: { ticket: $ticket }
    ) {
      ticket
      name
    }
  }
`;
