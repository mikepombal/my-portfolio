import gql from 'graphql-tag';

gql`
  mutation insertLog(
    $contract: String!
    $detail: String!
  ) {
    insert_log_one(
      object: {
        contract: $contract
        detail: $detail
      }
    ) {
      id
      timestamp
      contract
      detail
    }
  }
`;