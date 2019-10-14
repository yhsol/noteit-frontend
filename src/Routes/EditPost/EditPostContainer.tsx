import * as React from "react";
import { useMutation, useQuery } from "react-apollo-hooks";
import { toast } from "react-toastify";
import { withRouter, RouteComponentProps } from "react-router";
import { EDIT_POST } from "./EditPostQuery";
import { POST_QUERY } from "../Post/PostQuery";
import Loader from "../../Components/Loader";
import EditPostPresenter from "./EditPostPresenter";

type IEditPostContainerProps = RouteComponentProps<{ id: string }, any, any>;

const EditPostContainer: React.FunctionComponent<
  IEditPostContainerProps
> = props => {
  const {
    match: {
      params: { id }
    }
  } = props;

  const EDIT = "EDIT";
  // const DELETE = "DELETE";
  const [action] = React.useState(EDIT);

  const { data, loading } = useQuery(POST_QUERY, { variables: { id } });
  const post = data.seeFullPost;
  // console.log(post);
  const editPostMutation = useMutation(EDIT_POST);
  // 데이터들 전달하는게 문제가 아니었다.
  // useMutation 에서 데이터를 읽는 시점이 렌더 되는 시점보다 빨라서 이 때 데이터가 없기 때문에 에러가 나는 것.
  // loading 이 끝난 뒤에야 데이터를 가져올 수 있기때문에 여기서 바로 데이터 요청하면 오류.

  const onSubmit = async (title: any, text: any) => {
    if (id !== "" && action !== "") {
      try {
        const {
          data: { editPost }
        } = await editPostMutation({
          variables: {
            id,
            title,
            text,
            action: EDIT
          }
        });
        // console.log(editPost);
        toast.success("upload complete!");
        props.history.push(`/feed`);
      } catch (error) {
        toast.error("Can't upload post!");
      }
    }
  };

  return (
    <>
      {loading && <Loader />}
      {!loading && data && post ? (
        <>
          <EditPostPresenter
            id={id}
            onSubmit={onSubmit}
            title={post.title}
            text={post.text}
          />
        </>
      ) : null}
    </>
  );
};

export default withRouter(EditPostContainer);
