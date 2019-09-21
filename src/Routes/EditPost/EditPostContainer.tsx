import * as React from "react";
import { useMutation, useQuery } from "react-apollo-hooks";
import { toast } from "react-toastify";
import useUploadInput from "../../Utils/Hooks/useUploadInput";
import { withRouter, RouteComponentProps } from "react-router";
import Editor from "../../Utils/Editor";
import { EDIT_POST } from "./EditPostQuery";
import { POST_QUERY } from "../Post/PostQuery";
import Loader from "../../Components/Loader";
import EditPostPresenter from "./EditPostPresenter";

type IEditPostContainerProps = RouteComponentProps<{ id: string }, any, any>;

const EditPostContainer: React.FunctionComponent<
  IEditPostContainerProps
> = props => {
  const text = useUploadInput("");

  const {
    match: {
      params: { id }
    }
  } = props;

  const EDIT = "EDIT";
  const DELETE = "DELETE";

  const [action, setAction] = React.useState(EDIT);

  const editPostMutation = useMutation(EDIT_POST, {
    variables: {
      id,
      action
    }
  });

  const { data, loading } = useQuery(POST_QUERY, { variables: { id } });
  const post = data.seeFullPost;
  const onSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (id !== "" && action !== "" && post.value !== "" && text.value !== "") {
      try {
        const { data } = await editPostMutation();
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
      {!loading && data && post && (
        <EditPostPresenter
          title={post.title}
          text={post.text}
          onSubmit={onSubmit}
        />
      )}
    </>
  );
};

export default withRouter(EditPostContainer);
