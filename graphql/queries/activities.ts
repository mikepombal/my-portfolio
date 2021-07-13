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
      totalValue
    }
  }
`;

gql`
  query getActivitiesForTicket($market: String!, $ticket: String!) {
    activities(
      where: { market: { _eq: $market }, ticket: { _eq: $ticket } }
      order_by: { date: asc }
    ) {
      market
      ticket
      type
      quantity
      totalValue
      date
    }
  }
`;
