import { gql } from "apollo-boost";

export const EDIT_POST = gql`
  mutation editPost($id: String!) {
    editPost(id: $id) {
      id
      title
      text
    }
  }
`;
