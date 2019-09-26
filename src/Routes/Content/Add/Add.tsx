import * as React from "react";
import { useMutation } from "react-apollo-hooks";
import { UPLOAD_POST } from "./AddQuery";
import { toast } from "react-toastify";
import { withRouter, RouteComponentProps } from "react-router";
import ContentEditor from "../ContentEditor";

type IUploadPostContainerProps = RouteComponentProps;

const Add: React.FunctionComponent<IUploadPostContainerProps> = props => {
  const [title, setTitle] = React.useState<string>("");
  const [text, setText] = React.useState<string>("");

  const uploadPostMutation = useMutation(UPLOAD_POST, {
    variables: {
      title: title,
      text: text
    }
  });

  const onSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (title !== "" && text !== "") {
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

  const _onSave = (title: string, text: string) => {
    uploadPostMutation({ variables: { title, text } });
  };

  return (
    <ContentEditor
      title={title}
      text={text}
      onSubmit={onSubmit}
      onSave={_onSave}
    />
  );
};

export default withRouter(Add);
