import React from "react";
import styled from "styled-components";
import Input from "../../Utils/Input";

const Wrapper = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
`;

const Form = styled.div`
  ${props => props.theme.whiteBox}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 90vw;
  padding: 20px 10px;
  background-color: rgba(0, 0, 0, 0.001);
`;

const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 2rem;
`;

const Box = styled.div`
  ${props => props.theme.whiteBox}
  background-color: rgba(0,0,0,0.00009);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 17rem;
  padding: 0.5rem;
`;

interface IAuthPresenterProps {
  action: string;
  username: object;
  email: object;
  firstName: object;
  lastName: object;
}

const AuthPresenter: React.FunctionComponent<IAuthPresenterProps> = ({
  action,
  username,
  email,
  firstName,
  lastName
}) => {
  return (
    <Wrapper>
      <Form>
        <Title>LogIn to noteit</Title>
        {action === "logIn" && (
          <>
            <form>
              <Input placeholder={"email"} type="email" {...email} />
            </form>
          </>
        )}
      </Form>
    </Wrapper>
  );
};

export default AuthPresenter;
