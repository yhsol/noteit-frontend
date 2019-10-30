import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import BoldText from "../Styles/BoldText";

const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 9fr;
  align-items: center;
  justify-content: center;
  &:not(:last-child) {
    border-bottom: ${props => props.theme.boxBorder};
  }
  gap: 0.5rem;
  padding: 0 0.5rem;
`;

const UserCard = ({ username = "user", url }) => {
  return (
    <Card>
      <Link to={`/profile/${username}`}>
        <Avatar size={"sm"} url={url} />
      </Link>
      <div>
        <Link to={`/profile/${username}`}>
          <BoldText text={username} />
        </Link>
      </div>
    </Card>
  );
};

UserCard.propTypes = {
  username: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default UserCard;
