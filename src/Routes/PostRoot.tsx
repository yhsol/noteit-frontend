import * as React from "react";
import { useQuery, useMutation } from "react-apollo-hooks";
import { POST_QUERY } from "./Post/PostQuery";
import { RouteComponentProps, withRouter } from "react-router";
import PostContaier from "./Post/PostContaier";
import Loader from "../Components/Loader";

type IPostProps = RouteComponentProps<{ id: string }, any, any>;

const Post: React.FunctionComponent<IPostProps> = ({
  match: {
    params: { id }
  },
  history
}) => {
  const { data, loading } = useQuery(POST_QUERY, { variables: { id } });
  const post = data.seeFullPost;

  return (
    <>
      {loading && <Loader />}
      {!loading && data && post ? (
        <>
          <PostContaier
            id={post.id}
            user={post.user}
            title={post.title}
            text={post.text}
            tags={post.tags}
            files={post.files}
            isLiked={post.isLiked}
            likeCount={post.likeCount}
            commentCount={post.commentCount}
            createdAt={post.createdAt}
            history={post.history}
          />
        </>
      ) : null}
    </>
  );
};

export default withRouter(Post);
