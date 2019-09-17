import * as React from "react";
import UploadInput from "../../Utils/UploadInput";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const TitleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4rem;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

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

const Button = styled.button`
  width: 4rem;
  height: 2rem;
  color: white;
  font-size: 17px;
  background-color: ${props => props.theme.greyColor};
  border: 0;
  border-radius: ${props => props.theme.borderRadius};
`;

interface InputProps {
  value: string;
  onChange(e?: React.ChangeEvent<HTMLTextAreaElement>): void;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

interface IUPloadPostPresenterProps {
  title: InputProps;
  text: InputProps;
  onSubmit(e: React.MouseEvent<HTMLButtonElement>): void;
}

const UploadPostPresenter: React.FunctionComponent<
  IUPloadPostPresenterProps
> = ({ title, text, onSubmit }) => {
  return (
    <>
      <Wrapper>
        <TitleWrapper>
          <TitleForm>
            <TitleInput placeholder={"title"} {...title} />
          </TitleForm>
          {/* 저장은 되는데 저장하고나서 다시 feed page 로 이동해야 됨. */}
          <Button onClick={onSubmit}>save</Button>
        </TitleWrapper>
        <TextInput placeholder={"content"} {...text} />
      </Wrapper>
    </>
  );
};

export default UploadPostPresenter;
