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

export const CREATE_FRIEND = gql`
  mutation ($name: String!, $relation: String!) {
    friendCreate(name: $name, relation: $relation) {
      userErrors {
        message
      }
      friend {
        id
        name
        relation
      }
    }
  }
`;
