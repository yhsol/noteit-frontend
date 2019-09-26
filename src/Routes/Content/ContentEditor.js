import * as React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import TextareaAutosize from "react-autosize-textarea";

const TitleInput = styled(TextareaAutosize)`
  font-size: 50px;
  font-weight: 600;
  width: 100%;
  &::placeholder {
    font-weight: 600;
  }
`;

const ContentPreview = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
`;

const ContentInput = styled(TextareaAutosize)`
  font-size: 18px;
  margin-top: 15px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;

const Button = styled.button``;

const ContentEditor = ({ title, text, onSubmit, onSave }) => {
  const smallMedia = window.matchMedia("(min-width: 500px)").matches;
  const [contentTitle, setContentTitle] = React.useState(title || "");
  const [contentText, setContentText] = React.useState(text || "");
  const [contentId, setContentId] = React.useState("");
  const _onInputChange = event => {
    const {
      target: { value, name }
    } = event;
  };
  const _onSave = () => {
    onSave(contentTitle, contentText);
  };
  return (
    <>
      <TitleContainer>
        <TitleInput
          value={contentTitle.value}
          onChange={onSave}
          placeholder={"Untitled..."}
          name={"title"}
        />
        <Button onClick={_onSave}>Save</Button>
      </TitleContainer>
      <ContentPreview>
        <ContentInput
          value={contentText.value}
          onChange={onSave}
          placeholder={"# This supports markdown!"}
          name={"contentText"}
        />
        <ReactMarkdown source={contentText.value} />
      </ContentPreview>
    </>
  );
};

export default ContentEditor;
