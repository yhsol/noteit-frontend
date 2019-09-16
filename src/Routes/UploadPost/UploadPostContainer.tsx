import * as React from "react";
import UPloadPostPresenter from "./UploadPostPresenter";
import { useMutation } from "react-apollo-hooks";
import { UPLOAD_POST } from "./UploadPostQuery";
import { toast } from "react-toastify";
import useUploadInput from "../../Utils/Hooks/useUploadInput";
import { withRouter, RouteComponentProps } from "react-router";

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

  const onSubmit = async (e: React.FormEvent<HTMLFontElement>) => {
    e.preventDefault();
    if (title.value !== "" && text.value !== "") {
      try {
        const {
          data: { uploadPost }
        } = await uploadPostMutation();
        console.log(uploadPost);
        toast.success("upload complete!");
        props.history.push(`/feed`);
      } catch (error) {
        toast.error("Can't upload post!");
      }
    }
  };

  return <UPloadPostPresenter title={title} text={text} onSubmit={onSubmit} />;
};

export default withRouter(UploadPostContainer);
