import React, { useState } from "react";
import Number from "./Number";
import Input, { Form } from "./Input";

interface IAppProps {}

const AppLearnTypescript: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const [value, setValue] = useState<string>("");

  const onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    // console.log(event.target);
  };
  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const add = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <Form onFormSubmit={onFormSubmit}>
        <Input value={value} onChange={onChange} />
      </Form>
      <Number count={counter} />
      <button onClick={add}>+</button>
    </>
  );
};

export default AppLearnTypescript;
