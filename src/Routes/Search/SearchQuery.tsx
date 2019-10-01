import { gql } from "apollo-boost";

export const SEARCH = gql`
  query search($term: String!) {
    searchUser(term: $term) {
      id
      username
      avatar
      itsMe
      isFollowing
    }
    searchPost(term: $term) {
      id
      files {
        url
      }
      likeCount
      commentCount
      title
      text
      user {
        username
      }
    }
    searchTag(term: $term) {
      id
      post {
        user {
          username
        }
        title
        text
        likeCount
        commentCount
      }
      text
    }
  }
`;
