import * as React from "react";

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
  user: Array<IUserProps>;
  title: string;
  text: string;
  tags: Array<ITagsProps>;
  files: Array<IFilesProps>;
  isliked: boolean;
  commentCount: number;
  createdAt: number;
}

const PostListContainer: React.FunctionComponent<IPostListContaienr> = ({
  id,
  user,
  title,
  text,
  tags,
  files,
  isliked,
  commentCount,
  createdAt
}) => {
  return <div>{title}</div>;
};

export default PostListContainer;
