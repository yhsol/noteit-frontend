import * as React from "react";
import UPloadPostPresenter from "./UploadPostPresenter";
import useInput from "../../Utils/Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { UPLOAD_POST } from "./UploadPostQuery";
import { toast } from "react-toastify";

interface IUploadPostContainerProps {}

const UploadPostContainer: React.FunctionComponent<
  IUploadPostContainerProps
> = props => {
  const title = useInput("");
  const text = useInput("");
  const files = useInput("");
  const tags = useInput("");

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
      } catch (error) {
        toast.error("Can't upload post!");
      }
    }
  };

  return <UPloadPostPresenter title={title} text={text} onSubmit={onSubmit} />;
};

export default UploadPostContainer;
