import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Text = styled.span`
  font-weight: 600;
  color: ${props => props.theme.blackColor};
`;

const BoldText = ({ text }) => {
  return <Text>{text}</Text>;
};

BoldText.propTypes = {
  text: PropTypes.string.isRequired
};

export default BoldText;
