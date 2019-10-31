import React, { useState } from "react";
import PostListForm from "../../Components/UI/PostListForm";
import { IFilesProps, IUserProps, ITagsProps } from "../../SharedTypes";

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
  const [isLikedState] = useState<boolean>(isLiked);
  const [likeCountState] = useState<number>(likeCount);
  const [commentCountState] = useState<number>(commentCount);
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
