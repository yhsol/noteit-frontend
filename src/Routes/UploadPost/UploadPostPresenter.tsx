import * as React from "react";
import UploadInput from "../../Utils/UploadInput";

interface InputProps {
  value: string;
  onChange(e?: React.ChangeEvent<HTMLInputElement>): void;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

interface IUPloadPostPresenterProps {
  title: InputProps;
  text: InputProps;
  onSubmit(e: React.FormEvent<HTMLElement>): void;
}

const UPloadPostPresenter: React.FunctionComponent<
  IUPloadPostPresenterProps
> = ({ title, text, onSubmit }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <UploadInput placeholder={"title"} {...title} />
        <UploadInput placeholder={"content"} {...text} />
        <div>submit</div>
      </form>
      <div>tags</div>
    </>
  );
};

export default UPloadPostPresenter;
