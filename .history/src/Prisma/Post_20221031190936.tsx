import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query {
    posts {
      length
      title
      content
      date
      color
    }
  }
`;
export const CREATE_POST = gql`
  mutation CreatePost(
    $title: String!
    $date: String!
    $content: String!
    $color: String!
  ) {
    postCreate(title: $title, date: $date, content: $content, color: $color) {
      userErrors {
        message
      }
      post {
        title
        date
        length
        content
        color
      }
    }
  }
`;
export const UPDATE_POST = gql`
  mutation UpdatePost(
    $lengthId: Int!
    $title: String
    $content: String
    $color: String
  ) {
    postUpdate(
      lengthId: $lengthId
      title: $title
      content: $content

      color: $color
    ) {
      userErrors {
        message
      }
      post {
        content
        title
        content
        date

        color
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
