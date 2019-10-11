import React from "react";
import Button from "../../Utils/Button";

interface IFollowProps {
  isFollowing: Boolean;
  id: string;
  onClick?: () => void;
}

const FollowPresenter: React.FunctionComponent<IFollowProps> = ({
  isFollowing,
  onClick,
  id
}) => {
  return (
    <Button text={isFollowing ? "unfollow" : "follow"} onClick={onClick} />
  );
};

export default FollowPresenter;
