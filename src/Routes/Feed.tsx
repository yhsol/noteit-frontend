import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Loader from "../Components/Loader";

export const FEED_QUERY = gql`
  {
    seeFeed {
      id
      user {
        username
      }
      title
      text
      files {
        id
        url
      }
      tags
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

const Feed = () => {
  const { data, loading } = useQuery(FEED_QUERY);
  console.log(data, loading);
  return <div>{loading ? <Loader /> : <div>Feed!</div>}</div>;
};

export default Feed;
