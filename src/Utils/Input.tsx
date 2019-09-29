import * as React from "react";
import styled from "styled-components";
import { SearchIcon } from "./Icons";

const Form = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  border: ${props => props.theme.boxBorder};
  border-radius: ${props => props.theme.borderRadius};
  padding: 0px 0.5rem;
  font-size: 12px;
  ${props => props.theme.whiteBox};
  width: 17rem;
  margin: 0 auto;
  height: 1.7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SInput = styled.input`
  border: none;
  background-color: inherit;
  width: 100%;
`;

const SButton = styled.button`
  border: none;
  background-color: inherit;
  cursor: pointer;
`;

interface IInputProps {
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  type?: string;
  className?: string;
  icon?: boolean;
}

const Input: React.FunctionComponent<IInputProps> = ({
  value,
  onChange,
  placeholder,
  required = true,
  type = "text",
  className,
  icon
}) => {
  return (
    <Form>
      <SInput
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        type={type}
        className={className}
      />
      {icon && (
        <SButton>
          <SearchIcon size={17} />
        </SButton>
      )}
    </Form>
  );
};

export default Input;
