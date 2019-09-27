import * as React from "react";
import { useMutation } from "react-apollo-hooks";
import { UPLOAD_POST } from "./UploadPostQuery";
import { toast } from "react-toastify";
import useUploadInput from "../../Utils/Hooks/useUploadInput";
import { withRouter, RouteComponentProps } from "react-router";
import Editor from "../../Utils/Editor";

type IUploadPostContainerProps = RouteComponentProps;

const UploadPostContainer: React.FunctionComponent<
  IUploadPostContainerProps
> = props => {
  const title = useUploadInput("");
  const text = useUploadInput("");
  const files = useUploadInput("");
  const tags = useUploadInput("");

  const uploadPostMutation = useMutation(UPLOAD_POST, {
    variables: {
      title: title.value,
      text: text.value
    }
  });

  const onSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (title.value !== "" && text.value !== "") {
      try {
        const {
          data: { uploadPost }
        } = await uploadPostMutation();
        toast.success("upload complete!");
        props.history.push(`/feed`);
      } catch (error) {
        toast.error("Can't upload post!");
      }
    }
  };

  return <Editor title={title} text={text} onSubmit={onSubmit} />;
};

export default withRouter(UploadPostContainer);
