import React from "react";
import styled from "styled-components";

const Container = styled.button`
  color: white;
  background-color: ${props => props.theme.blueColor};
  border: 0;
  border-radius: ${props => props.theme.borderRadius};
  width: 17rem;
  height: 1.7rem;
  /* margin-top: 0.5rem;
  margin-bottom: 1rem; */
`;

interface IButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FunctionComponent<IButtonProps> = ({
  text,
  onClick,
  className
}) => {
  return (
    <Container onClick={onClick} className={className}>
      {text}
    </Container>
  );
};

export default Button;
