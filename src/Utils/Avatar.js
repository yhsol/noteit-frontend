import React from "react";
import styled from "styled-components";

const getSize = size => {
  let number;
  if (size === "sm") {
    number = 30;
  } else if (size === "md") {
    number = 50;
  } else if (size === "lg") {
    number = 150;
  }
  return `width: ${number}px; height:${number}px;`;
};

const Container = styled.div`
  ${props => getSize(props.size)};
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  background-color: grey;
`;

const Avatar = ({ size = "sm", url, className }) => {
  return <Container className={className} size={size} url={url} />;
};

export default Avatar;
