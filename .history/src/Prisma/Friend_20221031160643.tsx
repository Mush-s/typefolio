import { gql } from "@apollo/client";

export const GET_FRIENDS = gql`
  query {
    friends {
      id
      name
color
    }
  }
`;

export const CREATE_FRIEND = gql`
  mutation FriendCreate($name: String!, $color: String!) {
    friendCreate(name: $name, color: $color) {
      userErrors {
        message
      }
      friend {
        id
        name
color
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
        color
      }
    }
  }
`;
