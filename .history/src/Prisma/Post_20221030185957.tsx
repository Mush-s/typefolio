import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query {
    posts {
      length
      title
      content
      date
      relation
    }
  }
`;
export const CREATE_POST = gql`
  mutation CreatePost(
    $title: String!
    $date: String!
    $length: Int!
    $content: String!
    $relation: String!
  ) {
    postCreate(
      title: $title
      date: $date
      length: $length
      content: $content
      relation: $relation
    ) {
      userErrors {
        message
      }
      post {
        title
        date
        length
        content
      }
    }
  }
`;
export const UPDATE_POST = gql`
  mutation UpdatePost($lengthId: Int!, $title: String, $content: String) {
    postUpdate(lengthId: $lengthId, title: $title, content: $content) {
      userErrors {
        message
      }
      post {
        content
        title
        content
        date
      }
    }
  }
`;
export const DELETE_POST = gql`
  mutation PostDelete($lengthId: Int!) {
    postDelete(lengthId: $lengthId) {
      userErrors {
        message
      }
      post {
        length
      }
    }
  }
`;
