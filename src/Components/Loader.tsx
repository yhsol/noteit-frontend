import * as React from "react";
import styled, { keyframes } from "styled-components";
import { NoteIcon } from "../Utils/Icons";

const Animation = keyframes`
    0% {
        opacity: 0
    }
    50% {
        opacity: 1
    }
    100% {
        opacity: 0
    }
`;

const Wrapper = styled.div`
  animation: ${Animation} 1s linear infinite;
  margin: 5rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface ILoaderProps {}

const Loader: React.FunctionComponent<ILoaderProps> = () => {
  return (
    <Wrapper>
      <NoteIcon size={38} />
    </Wrapper>
  );
};

export default Loader;
