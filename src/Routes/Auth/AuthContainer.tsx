import React, { useState } from "react";
import useInput from "../../Utils/Hooks/useInput";
import AuthPresenter from "./AuthPresenter";
import { useMutation } from "react-apollo-hooks";
import { LOG_IN, CREATE_ACCOUNT } from "./AuthQuery";
import { toast } from "react-toastify";

// TODO: Auth 페이지에서는 header 를 안보이게 해야됨.

interface IAuthProps {}

const AuthContainer: React.FunctionComponent<IAuthProps> = () => {
  const [action, setAction] = useState<string>("logIn");
  const username = useInput("");
  const email = useInput("");
  const firstName = useInput("");
  const lastName = useInput("");

  const requestSecret = useMutation(LOG_IN, {
    update: (_, { data }) => {
      const { requestSecret } = data;
      if (!requestSecret) {
        toast.error("You don't have an account yet, create one!");
        setTimeout(() => setAction("signUP"), 2000);
      }
    },
    variables: { email: email.value }
  });

  const createAccount = useMutation(CREATE_ACCOUNT, {
    variables: {
      username: username.value,
      email: email.value,
      firstName: firstName.value,
      lastName: lastName.value
    }
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (action === "login") {
      if (email.value !== "") {
        requestSecret();
      } else {
        toast.error("Email is required!");
      }
    } else if (action === "signUp") {
      if (
        username.value !== "" &&
        email.value !== "" &&
        firstName.value !== "" &&
        lastName.value !== ""
      ) {
        createAccount();
      } else {
        toast.error("All filed are required");
      }
    }
  };

  return (
    <AuthPresenter
      action={action}
      username={username}
      email={email}
      firstName={firstName}
      lastName={lastName}
      onSubmit={onSubmit}
    />
  );
};

export default AuthContainer;
