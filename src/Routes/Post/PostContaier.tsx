import * as React from "react";
import { useQuery } from "react-apollo-hooks";
import { POST_QUERY } from "./PostQuery";
import { withRouter, RouteComponentProps } from "react-router";
import Loader from "../../Components/Loader";

type IPostContaienr = RouteComponentProps<{ id: string }, any, any>;

const PostContainer: React.FunctionComponent<IPostContaienr> = ({
  match: {
    params: { id }
  }
}) => {
  const { data, loading } = useQuery(POST_QUERY, { variables: { id } });
  console.log(data, loading);

  return (
    <>
      {loading && <Loader />}
      <div>postId: {id}</div>
      {!loading && data && data.seeFullPost && <div>seeFullPost!</div>}
    </>
  );
};

export default withRouter(PostContainer);
