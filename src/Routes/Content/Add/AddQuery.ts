import { gql } from "apollo-boost";

export const UPLOAD_POST = gql`
  mutation uploadPost($text: String!, $title: String!) {
    uploadPost(text: $text, title: $title) {
      id
    }
  }
`;
