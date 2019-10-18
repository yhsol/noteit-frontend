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
  justify-content: center;
  /* width: 17rem; */
  /* width: 90vw; */
  /* padding: 20px 10px; */
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.001);
  text-align: center;
  margin-bottom: 0.5rem;
  width: 32rem;
  height: 35vh;
  form {
    width: 100%;
    display: grid;
    gap: 0.3rem;
    justify-items: center;
    button {
      color: white;
      width: 80%;
    }
  }
`;

const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 2rem;
`;

const SignUp = styled.span`
  color: ${props => props.theme.uiColorOrange};
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
  setAction: React.Dispatch<React.SetStateAction<string>>;
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
  secret,
  setAction
}) => {
  const onSignUp = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    setAction("signUp");
  };
  return (
    <Wrapper>
      <Form>
        <Title>LogIn to noteit</Title>
        {action === "logIn" && (
          <>
            <form onSubmit={onSubmit}>
              <Input placeholder={"email"} type="email" {...email} />
              <Button text={"Log In"} />
              <div>
                <SignUp onClick={onSignUp}>sign up</SignUp> here!
              </div>
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
