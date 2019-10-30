import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Loader from "../Components/Loader";
import PostListForm from "../Components/UI/PostListForm";

const EXPLORE_QUERY = gql`
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
      isLiked
      commentCount
      likeCount
      createdAt
      updatedAt
    }
  }
`;

const Explore = () => {
  const { data, loading } = useQuery(EXPLORE_QUERY);
  // console.log(data);
  return (
    <>
      {loading && <Loader />}
      {!loading &&
        data &&
        data.seeFeed &&
        data.seeFeed.map((explore: any) => (
          <PostListForm
            key={explore.id}
            id={explore.id}
            user={explore.user}
            title={explore.title}
            text={explore.text}
            tags={explore.tags}
            files={explore.files}
            isLiked={explore.isLiked}
            likeCount={explore.likeCount}
            commentCount={explore.commentCount}
            createdAt={explore.createdAt}
            updatedAt={explore.updatedAt}
          />
        ))}
    </>
  );
};

export default Explore;
