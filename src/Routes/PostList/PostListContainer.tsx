import React, { useState } from "react";
import PostListPresenter from "./PostListPresenter";
import useInput from "../../Utils/Hooks/useInput";
import PostListForm from "../../Components/LayOut/PostListForm";

interface IUserProps {
  id: string;
  username: string;
  avatar: string;
}

interface ITagsProps {
  id: string;
  text: string;
}

interface IFilesProps {
  id: string;
  url: string;
}

interface IPostListContaienr {
  id: string;
  user: IUserProps;
  title: string;
  text: string;
  tags: ITagsProps;
  files: Array<IFilesProps>;
  isLiked: boolean;
  likeCount: number;
  commentCount: number;
  createdAt: number;
  updatedAt: number;
}

const PostListContainer: React.FunctionComponent<IPostListContaienr> = ({
  id,
  user,
  title,
  text,
  tags,
  files,
  isLiked,
  likeCount,
  commentCount,
  createdAt,
  updatedAt
}) => {
  const [isLikedState, setIsLiked] = useState<boolean>(isLiked);
  const [likeCountState, setLikeCount] = useState<number>(likeCount);
  const [commentCountState, setCommentCount] = useState<number>(commentCount);
  return (
    <PostListForm
      id={id}
      user={user}
      title={title}
      text={text}
      tags={tags}
      files={files}
      isLiked={isLikedState}
      likeCount={likeCountState}
      commentCount={commentCountState}
      createdAt={createdAt}
      updatedAt={updatedAt}
    />
  );
};

export default PostListContainer;
