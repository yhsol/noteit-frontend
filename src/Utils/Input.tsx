import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.input``;

interface IInputProps {
  value?: string;
  placeholder?: string;
  onChange?: () => void;
  required?: boolean;
  type: string;
  className?: string;
}

const Input: React.FunctionComponent<IInputProps> = ({
  value,
  onChange,
  placeholder,
  required = true,
  type = "text",
  className
}) => {
  return (
    <Wrapper
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      type={type}
      className={className}
    />
  );
};

export default Input;
