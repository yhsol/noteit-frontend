import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.input`
  background-color: ${props => props.theme.backgroundColor};
  border: ${props => props.theme.boxBorder};
  border-radius: ${props => props.theme.borderRadius};
  padding: 0px 0.5rem;
  font-size: 12px;
  ${props => props.theme.whiteBox};
  width: 17rem;
  margin: 0 auto;
  height: 1.7rem;
`;

interface IInputProps {
  value?: string;
  placeholder?: string;
  onChange?: () => void;
  required?: boolean;
  type?: string;
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
