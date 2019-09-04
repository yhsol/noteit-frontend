import { gql } from "apollo-boost";

export const ME = gql`
  {
    me {
      username
    }
  }
`;

export const FEED_QUERY = gql`
  {
    seeFeed {
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
