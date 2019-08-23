import React, { useState } from "react";

interface IuseInputProps {}

// React.FunctionComponent 로는 작동안됨.
// const { target: { value } } = e; 같은 형식도 타입 요소를 잘 지정하면 잘 작동함.

const useInput: React.PropsWithChildren<IuseInputProps> = (
  defaultValue: string
) => {
  const [value, setValue] = useState<string>(defaultValue);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = e;
    setValue(value);
  };
  return { value, onChange, setValue };
};

export default useInput;
