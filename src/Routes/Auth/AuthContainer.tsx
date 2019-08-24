import React, { useState } from "react";
import styled from "styled-components";
import useInput from "../../Utils/Hooks/useInput";
import AuthPresenter from "./AuthPresenter";
import { useMutation } from "react-apollo-hooks";
import { LOG_IN } from "./AuthQuery";

// TODO: Auth 페이지에서는 header 를 안보이게 해야됨.

interface ActionProps {
  action: string;
}

interface IAuthProps {}

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

const AuthContainer: React.FunctionComponent<IAuthProps> = () => {
  const [action, setAction] = useState<string>("logIn");
  const username = useInput("");
  const email = useInput("");
  const firstName = useInput("");
  const lastName = useInput("");
  const requestSecretMutation = useMutation(LOG_IN, {
    variables: { email: email.value }
  });

  return (
    <AuthPresenter
      action={action}
      username={username}
      email={email}
      firstName={firstName}
      lastName={lastName}
    />
  );
};

export default AuthContainer;
