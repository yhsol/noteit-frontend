import React, { useState } from "react";
import PropTypes from "prop-types";
import { useMutation } from "react-apollo-hooks";
import FollowPresenter from "./FollowPresenter";
import { FOLLOW, UNFOLLOW } from "./FollowQuery";

interface FollowProps {
  isFollowing: boolean;
  id: string;
}

const FollowContainer: React.FunctionComponent<FollowProps> = ({
  isFollowing,
  id
}) => {
  const [isFollowingState, setIsFollowing] = useState(isFollowing);
  const followMutation = useMutation(FOLLOW, { variables: { id } });
  const unfollowMutation = useMutation(UNFOLLOW, { variables: { id } });

  const onClick = () => {
    if (isFollowingState === true) {
      setIsFollowing(false);
      unfollowMutation();
    } else {
      setIsFollowing(true);
      followMutation();
    }
  };

  return (
    <FollowPresenter isFollowing={isFollowingState} onClick={onClick} id={id} />
  );
};

FollowContainer.propTypes = {
  isFollowing: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired
};

export default FollowContainer;
