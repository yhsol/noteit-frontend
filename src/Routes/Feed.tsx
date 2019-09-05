import React from "react";
import { useQuery } from "react-apollo-hooks";
import Loader from "../Components/Loader";
import PostList from "./PostList";
import { FEED_QUERY } from "../SharedQuery";

const Feed = () => {
  const { data, loading } = useQuery(FEED_QUERY);
  return (
    <>
      {loading && <Loader />}
      {/* {!loading && data && <div>data is here!{data.seeFeed[0].title}</div>} */}
      {!loading &&
        data &&
        data.seeFeed &&
        data.seeFeed.map((postList: any) => (
          <PostList
            key={postList.id}
            id={postList.id}
            user={postList.user}
            title={postList.title}
            text={postList.text}
            tags={postList.tags}
            files={postList.files}
            isliked={postList.isliked}
            commentCount={postList.commentCount}
            createdAt={postList.createdAt}
          />
        ))}
    </>
  );
};

export default Feed;
