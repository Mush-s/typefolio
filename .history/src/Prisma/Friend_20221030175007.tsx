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
  mutation FriendCreate($name: String!, $relation: String!) {
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

export const DELETE_FRIEND = gql`
  mutation DeleteFriend($id: Int!) {
    friendDelete(id: $id) {
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
