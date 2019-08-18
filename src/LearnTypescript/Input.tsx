import * as React from "react";

interface IInputProps {
  value: string;
  onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;
}

interface ISubmitProps {
  onFormSubmit: (event: React.FormEvent) => void;
}

export const Input: React.FunctionComponent<IInputProps> = ({
  value,
  onChange
}) => {
  return (
    <input type="text" placeholder="Input" value={value} onChange={onChange} />
  );
};

export const Form: React.FunctionComponent<ISubmitProps> = ({
  children,
  onFormSubmit
}) => {
  return <form onSubmit={onFormSubmit}>{children}</form>;
};

export default Input;
