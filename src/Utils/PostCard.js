import React from "react";
import styled from "styled-components";
import { CaptionIcon, LocationIcon, LogoIcon, NoteIcon } from "./Icons";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  margin-bottom: 1rem;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    border-bottom: ${props => props.theme.boxBorder};
  }
  gap: 0.5rem;
  padding: 0.2rem;
`;

const Title = styled.div`
  margin-left: 0.2rem;
  font-weight: 500;
  font-size: 17px;
`;

const PostCard = ({ text, title, id }) => {
  return (
    <>
      <Wrapper>
        <Link to={`/post/${id}`}>
          <Card>
            <NoteIcon />
            <Title>{title}</Title>
          </Card>
        </Link>
        <Link to={`/post/${id}`}>
          <div>{text.substring(0, 50)}</div>
        </Link>
      </Wrapper>
    </>
  );
};

PostCard.propTypes = {};

export default PostCard;
