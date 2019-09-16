import * as React from "react";
import styled from "styled-components";

const Form = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  font-size: 12px;
  width: 17rem;
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
}

const UploadInput: React.FunctionComponent<IInputProps> = ({
  value,
  onChange,
  placeholder,
  required = true,
  type = "text",
  className
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
    </Form>
  );
};

export default UploadInput;
