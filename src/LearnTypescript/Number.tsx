import * as React from "react";
import styled from "styled-components";

// use inline props for styled-components
const Container = styled.span<{ isBlue: boolean }>`
  color: ${props => (props.isBlue ? props.theme.blueColor : "black")};
`;

// use interface for components
interface INumberProps {
  count: number;
}

const Number: React.FunctionComponent<INumberProps> = ({ count }) => {
  return <Container isBlue={count > 10}>{count}</Container>;
};

export default Number;
