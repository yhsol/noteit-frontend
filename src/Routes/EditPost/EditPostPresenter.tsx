import * as React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import media from "styled-media-query";
import TextareaAutosize from "react-autosize-textarea";

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
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  ${media.lessThan("medium")`grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr;
 `};
  row-gap: 20px;
`;

const TitleForm = styled.form`
  display: flex;
  margin: 0.5rem 0;
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.2); */
`;

const TitleInput = styled(TextareaAutosize)`
  border: none;
  background-color: inherit;
  width: 100%;
  &:focus {
    outline: none;
  }
  resize: none;
  font-size: 26px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const TextInput = styled(TextareaAutosize)`
  border: none;
  background-color: inherit;
  width: 100%;
  &:focus {
    outline: none;
  }
  resize: none;
  font-size: 26px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const Button = styled.button`
  width: 100%;
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

interface IEditorProps {
  id?: string;
  title: string;
  text: string;
  onSubmit: any;
}

const EditPostPresenter: React.FunctionComponent<IEditorProps> = ({
  onSubmit,
  title,
  text,
  id
}) => {
  const smallMedia = window.matchMedia("(min-width: 500px)").matches;

  const [toggle, setToggle] = React.useState(false);
  const onClickToggle = () => {
    setToggle(!toggle);
  };

  const [editTitle, setEditTitle] = React.useState<string>(title);
  const [editText, setEditText] = React.useState<string>(text);
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value }
    } = e;
    setEditTitle(value);
  };
  const textonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value }
    } = e;
    setEditText(value);
  };
  const _onSubmit = () => {
    onSubmit(editTitle, editText);
  };
  return (
    <>
      <Wrapper>
        <TitleWrapper>
          <TitleForm>
            <TitleInput
              placeholder={"title"}
              value={editTitle}
              onChange={onChange}
              name={"name"}
            />
          </TitleForm>
          {/* 저장은 되는데 저장하고나서 다시 feed page 로 이동해야 됨. */}
          <div>
            <Button onClick={_onSubmit}>save</Button>
            <Button onClick={onClickToggle}>markdown</Button>
          </div>
        </TitleWrapper>
        <TextWrapper>
          {!smallMedia ? (
            <>
              {toggle === true && (
                <div>
                  <ReactMarkdown source={editText} />
                </div>
              )}
              <TextInput
                placeholder={"content"}
                value={editText}
                onChange={textonChange}
                name={editText}
              />
            </>
          ) : (
            <>
              <TextInput
                placeholder={"content"}
                value={editText}
                onChange={textonChange}
                name={editText}
              />
              {toggle === true && (
                <div>
                  <ReactMarkdown source={editText} />
                </div>
              )}
            </>
          )}
        </TextWrapper>
      </Wrapper>
    </>
  );
};

export default EditPostPresenter;
