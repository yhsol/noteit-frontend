import * as React from "react";
import styled from "styled-components";
import TextareaAutosize from "react-autosize-textarea";

const Form = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  font-size: 12px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SInput = styled(TextareaAutosize)`
  border: none;
  background-color: inherit;
  width: 100%;
  &:focus {
    outline: none;
  }
  resize: none;
  font-size: 12px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const SButton = styled.button`
  border: none;
  background-color: inherit;
  cursor: pointer;
`;

interface IInputProps {
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
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
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        required={required}
        type={type}
        className={className}
      />
    </Form>
  );
};

export default UploadInput;
