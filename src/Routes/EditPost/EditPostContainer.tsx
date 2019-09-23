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
  const {
    match: {
      params: { id }
    }
  } = props;

  const EDIT = "EDIT";
  const DELETE = "DELETE";
  const [action, setAction] = React.useState(EDIT);
  const [titletitle, settitletitle] = React.useState("");
  const [texttext, settexttext] = React.useState("");

  const { data, loading } = useQuery(POST_QUERY, { variables: { id } });
  const post = data.seeFullPost;
  console.log(post);
  // React.useEffect(() => {
  //   return () => {
  //     if (!loading && data && post) {
  //       settitletitle(post.title);
  //       settexttext(post.text);
  //     }
  //   };
  // }, []);

  const title = useUploadInput(titletitle);
  const text = useUploadInput("");
  const editPostMutation = useMutation(EDIT_POST, {
    variables: {
      id,
      action: EDIT,
      title: title.value,
      text: text.value
    }
  });

  // loading 이 끝난 뒤에야 데이터를 가져올 수 있기때문에 여기서 바로 데이터 요청하면 오류.
  const onSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (id !== "" && action !== "") {
      try {
        const {
          data: { editPost }
        } = await editPostMutation();
        console.log(editPost);
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
          <Editor title={title} text={text} onSubmit={onSubmit} />
        </>
      ) : null}
    </>
  );
};

export default withRouter(EditPostContainer);
