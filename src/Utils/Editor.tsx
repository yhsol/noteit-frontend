import * as React from "react";
import UploadInput from "../Utils/UploadInput";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import media from "styled-media-query";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const TitleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 7.1rem;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const TextWrapper = styled.div`
  display: grid;
  /* grid-template-columns: repeat(2, 1fr); */
  width: 100%;
  ${media.lessThan("medium")`grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr;
 `};
  row-gap: 20px;
  margin-top: 2rem;
`;

const TitleForm = styled.form`
  display: flex;
  margin: 0.5rem 0;
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.2); */
`;

const TitleInput = styled(UploadInput)`
  font-size: 23px;
  border: none;
  font-weight: bold;
  font-size: 2rem;
`;

const TextInput = styled(UploadInput)`
  font-size: 20px;
`;

const MarkDown = styled(ReactMarkdown)`
  width: 100%;
  word-break: break-all;
`;

const Buttons = styled.div``;

const Button = styled.button`
  width: 100%;
  height: 2rem;
  color: white;
  font-size: 17px;
  background-color: ${props => props.theme.greyColor};
  border: 0;
  border-radius: ${props => props.theme.borderRadius};
  margin-right: 0.3rem;
`;

interface InputProps {
  value: string;
  onChange(e?: React.ChangeEvent<HTMLTextAreaElement>): void;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

interface IEditorProps {
  id?: string;
  title: InputProps;
  text: InputProps;
  editTitle?: string;
  editText?: string;
  onSubmit(e: React.MouseEvent<HTMLButtonElement>): void;
}

const Editor: React.FunctionComponent<IEditorProps> = ({
  title,
  text,
  onSubmit,
  editTitle,
  editText,
  id
}) => {
  const smallMedia = window.matchMedia("(min-width: 500px)").matches;

  const [toggle, setToggle] = React.useState(false);
  const onClickToggle = () => {
    setToggle(!toggle);
  };
  // console.log(title);
  const { setValue } = title;
  // setValue(editTitle);
  const _onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value }
    } = e;
    setValue(value);
  };
  return (
    <>
      <Wrapper>
        <TitleWrapper>
          <TitleForm>
            <TitleInput
              placeholder={"title"}
              value={title.value}
              onChange={_onChange}
              name={title.value}
            />
          </TitleForm>
          {/* 저장은 되는데 저장하고나서 다시 feed page 로 이동해야 됨. */}
          <Buttons>
            <Button onClick={onSubmit}>save</Button>
            <Button onClick={onClickToggle}>markdown</Button>
          </Buttons>
        </TitleWrapper>
        <TextWrapper>
          {!smallMedia ? (
            <>
              {toggle === true && (
                <div>
                  <MarkDown source={text.value} />
                </div>
              )}
              <TextInput placeholder={"content"} {...text} name={text.value} />
            </>
          ) : (
            <>
              {toggle === true && (
                <div>
                  <MarkDown source={text.value} />
                </div>
              )}
              <TextInput placeholder={"content"} {...text} name={text.value} />
            </>
          )}
        </TextWrapper>
      </Wrapper>
    </>
  );
};

export default Editor;
