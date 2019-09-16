import React, { useState } from "react";

interface IuseInputProps {}

type TypeUseInput = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const useUploadInput = (defaultValue: string): TypeUseInput => {
  const [value, setValue] = useState<string>(defaultValue);
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value }
    } = e;
    setValue(value);
  };
  return { value, onChange, setValue };
};

export default useUploadInput;
