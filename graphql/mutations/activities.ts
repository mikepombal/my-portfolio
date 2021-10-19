import gql from 'graphql-tag';

gql`
  mutation insertActivity(
    $date: timestamptz!
    $ticket: String!
    $market: String!
    $totalValue: numeric!
    $quantity: numeric!
    $type: activity_enum!
  ) {
    insert_activities_one(
      object: {
        date: $date
        market: $market
        quantity: $quantity
        ticket: $ticket
        totalValue: $totalValue
        type: $type
      }
    ) {
      id
      ticket
      market
      type
      quantity
      totalValue
      date
    }
  }
`;

gql`
  mutation insertActivities($objects: [activities_insert_input!]!) {
    insert_activities(objects: $objects) {
      affected_rows
    }
  }
`;
