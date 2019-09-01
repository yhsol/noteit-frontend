import React, { useState } from "react";

interface IuseInputProps {}

type TypeUseInput = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

// React.FunctionComponent 로는 작동안됨.
// const { target: { value } } = e; 같은 형식도 타입 요소를 잘 지정하면 잘 작동함.

// 해당 컴포넌트의 타입을 지정해주지 않으니까 잘 작동함.
// 심지어 해당 컴포넌트를 사용할 때 역시 hooks 뒤에 따로 타입을 지정해주지 않아도 다 알고 있음.
// 이럴때는 안써도 되는건가?

const useInput = (defaultValue: string): TypeUseInput => {
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
