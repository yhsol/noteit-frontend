import * as React from "react";
import UploadInput from "../../Utils/UploadInput";
import styled from "styled-components";

const TitleForm = styled.form`
  margin: 0.5rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const TitleInput = styled(UploadInput)`
  font-size: 23px;
`;

const TextInput = styled(UploadInput)`
  font-size: 20px;
`;

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
      <TitleForm onSubmit={onSubmit}>
        <TitleInput placeholder={"title"} {...title} />
      </TitleForm>
      <TextInput placeholder={"content"} {...text} />
    </>
  );
};

export default UPloadPostPresenter;
