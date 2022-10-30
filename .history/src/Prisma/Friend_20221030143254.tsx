import { gql } from "@apollo/client";

export const GET_FRIENDS = gql`
  query {
    friends {
      id
      name
      relation
    }
  }
`;
