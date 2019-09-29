import * as React from "react";
import { useQuery } from "react-apollo-hooks";
import { POST_QUERY } from "./PostQuery";
import { withRouter, RouteComponentProps } from "react-router";
import Loader from "../../Components/Loader";
import PostPresenter from "./PostPresenter";

type IPostContaienr = RouteComponentProps<{ id: string }, any, any>;

const PostContainer: React.FunctionComponent<IPostContaienr> = ({
  match: {
    params: { id: postId }
  },
  history
}) => {
  const { data, loading } = useQuery(POST_QUERY, { variables: { id: postId } });
  const post = data.seeFullPost;
  console.log(data);
  return (
    <>
      {loading && <Loader />}
      {!loading && data && post && (
        <PostPresenter
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
          history={history}
        />
      )}
    </>
  );
};

export default withRouter(PostContainer);
