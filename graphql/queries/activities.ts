import gql from 'graphql-tag';

gql`
  query allActivities {
    activities(order_by: { date: desc }, limit: 100) {
      id
      date
      ticket
      market
      type
      quantity
      total_value
    }
  }
`;
