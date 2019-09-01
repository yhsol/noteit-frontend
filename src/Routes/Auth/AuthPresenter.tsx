import * as React from "react";
import styled from "styled-components";
import Input from "../../Utils/Input";
import Button from "../../Utils/Button";

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
  text-align: center;
`;

const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 2rem;
`;

// const Box = styled.div`
//   ${props => props.theme.whiteBox}
//   background-color: rgba(0,0,0,0.00009);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 17rem;
//   padding: 0.5rem;
// `;

interface IAuthPresenterProps {
  action: string;
  username: InputProps;
  email: InputProps;
  firstName: InputProps;
  lastName: InputProps;
  secret: InputProps;
  onSubmit(e: React.FormEvent<HTMLElement>): void;
}

interface InputProps {
  value: string;
  onChange(e?: React.ChangeEvent<HTMLInputElement>): void;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const AuthPresenter: React.FunctionComponent<IAuthPresenterProps> = ({
  action,
  username,
  email,
  firstName,
  lastName,
  onSubmit,
  secret
}) => {
  return (
    <Wrapper>
      <Form>
        <Title>LogIn to noteit</Title>
        {action === "logIn" && (
          <>
            <form onSubmit={onSubmit}>
              <Input placeholder={"email"} type="email" {...email} />
              <Button text={"Log In"} />
            </form>
          </>
        )}
        {action === "signUp" && (
          <>
            <form onSubmit={onSubmit}>
              <Input placeholder={"email"} type="email" {...email} />
              <Input placeholder={"username"} {...username} />
              <Input placeholder={"firstName"} {...firstName} />
              <Input placeholder={"lastName"} {...lastName} />
              <Button text={"Sign Up"} />
            </form>
          </>
        )}
        {action === "confirm" && (
          <>
            <form onSubmit={onSubmit}>
              <Input placeholder={"login secret"} required {...secret} />
              <Button text={"Confirm"} />
            </form>
          </>
        )}
      </Form>
    </Wrapper>
  );
};

export default AuthPresenter;
