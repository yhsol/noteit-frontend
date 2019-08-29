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

  const requestSecretMutation = useMutation(LOG_IN, {
    variables: { email: email.value }
  });

  const createAccountMutation = useMutation(CREATE_ACCOUNT, {
    variables: {
      username: username.value,
      email: email.value,
      firstName: firstName.value,
      lastName: lastName.value
    }
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (action === "logIn") {
      if (email.value !== "") {
        try {
          const {
            data: { requestSecret }
          } = await requestSecretMutation();
          console.log(requestSecret);
          if (!requestSecret) {
            toast.error("You don't have an account yet, create one!");
            setTimeout(() => {
              setAction("signUp");
            }, 2000);
          } else {
            toast.success("Check your email for login secret!");
            setAction("confirm");
          }
        } catch {
          toast.error("Can't request secret, try again!");
        }
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
        try {
          const {
            data: { createAccount }
          } = await createAccountMutation();
          console.log(createAccount);
          if (!createAccount) {
            toast.error("Can't create an account, try again!");
          } else {
            toast.success("Accoun created! Log In NoW");
            setTimeout(() => setAction("logIn"), 2000);
          }
        } catch (error) {
          toast.error(error.message);
        }
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
