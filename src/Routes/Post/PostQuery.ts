import { gql } from "apollo-boost";

export const POST_QUERY = gql`
  query seeFullPost($id: String!) {
    seeFullPost(id: $id) {
      id
      user {
        id
        avatar
        username
      }
      title
      text
      files {
        id
        url
      }
      tags {
        id
        text
      }
      location
      likes {
        id
        user {
          id
          username
        }
      }
      comments {
        id
        text
        user {
          id
          username
        }
      }
      isLiked
      commentCount
      likeCount
      createdAt
      updatedAt
    }
  }
`;
