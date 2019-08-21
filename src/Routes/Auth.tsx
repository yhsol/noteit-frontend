import React, { useState } from "react";
import styled from "styled-components";

// TODO: Auth 페이지에서는 header 를 안보이게 해야됨.

interface ActionProps {
  action: string;
}

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
`;

const Box = styled.button`
  ${props => props.theme.whiteBox};
  background-color: ${props => props.theme.blueColor};
  color: white;
  border: none;
  width: 200px;
  height: 30px;
`;

const Auth = () => {
  const [action, setAction] = useState<String>("logIn");

  return (
    <Wrapper>
      <>
        <div>{action === "logIn" ? <Box>Log In</Box> : <Box>Sign Up</Box>}</div>
      </>
    </Wrapper>
  );
};

export default Auth;
