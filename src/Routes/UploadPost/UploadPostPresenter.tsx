import * as React from "react";
import UploadInput from "../../Utils/UploadInput";
import styled from "styled-components";

const TitleForm = styled.form`
  display: flex;
  margin: 0.5rem 0;
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.2); */
`;

const TitleInput = styled(UploadInput)`
  font-size: 23px;
  border: none;
`;

const TextInput = styled(UploadInput)`
  font-size: 20px;
`;

interface InputProps {
  value: string;
  onChange(e?: React.ChangeEvent<HTMLTextAreaElement>): void;
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
      <TitleForm>
        <TitleInput placeholder={"title"} {...title} />
        <button onClick={onSubmit}>save</button>
      </TitleForm>
      {/* 저장은 되는데 저장하고나서 다시 feed page 로 이동해야 됨. */}
      <TextInput placeholder={"content"} {...text} />
    </>
  );
};

export default UPloadPostPresenter;
