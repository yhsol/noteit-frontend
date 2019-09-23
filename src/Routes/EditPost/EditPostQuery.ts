import { gql } from "apollo-boost";

export const EDIT_POST = gql`
  mutation editPost(
    $id: String!
    $action: ACTIONS!
    $title: String
    $text: String
  ) {
    editPost(id: $id, action: $action, title: $title, text: $text) {
      id
      title
      text
    }
  }
`;
