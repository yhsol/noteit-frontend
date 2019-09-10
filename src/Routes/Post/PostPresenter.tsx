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

interface IPostPresenter {
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
}

const PostPresenter: React.FunctionComponent<IPostPresenter> = ({
  id,
  user,
  title,
  text,
  tags,
  files,
  isLiked,
  likeCount,
  commentCount,
  createdAt
}) => {
  return (
    <>
      <div>{title}</div>
      <div>{user.username}</div>
      <div>{text}</div>
      <div>{tags && "tags need map"}</div>
      <div>{files && "files need map"}</div>
      <div>{isLiked ? "is liked" : "is no liked"}</div>
      <div>{likeCount}</div>
      <div>{commentCount}</div>
      <div>{createdAt}</div>
    </>
  );
};

export default PostPresenter;
