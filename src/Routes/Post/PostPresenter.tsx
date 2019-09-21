import * as React from "react";
import styled from "styled-components";
import { FullHeartIcon, EmptyHeartIcon, CommentIcon } from "../../Utils/Icons";
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
  src: string;
}

interface IPostPresenter {
  id: string;
  user: IUserProps;
  title: string;
  text: string;
  tags: Array<ITagsProps>;
  files: Array<IFilesProps>;
  isLiked: boolean;
  likeCount: number;
  commentCount: number;
  createdAt: number;
}

const Wrapper = styled.div`
  width: 100%;
`;

const FileWrapper = styled.div`
  width: 300px;
  height: 300px;
`;

const File = styled.img`
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
`;

const Tag = styled.span`
  margin-right: 0.5rem;
`;

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
  console.log(files);
  return (
    <>
      <Wrapper>
        <h1>{title}</h1>
        <div>{id}</div>
        <div>{user.username}</div>
        <div>{createdAt}</div>
        <div>{text}</div>
        <FileWrapper>
          {files &&
            files.map(file => (
              <File key={file.id} id={file.id} src={file.url} />
            ))}
        </FileWrapper>
        <div>
          {isLiked ? <FullHeartIcon /> : <EmptyHeartIcon />}
          {likeCount}
          <CommentIcon />
          {commentCount}
        </div>
        <div>
          {tags && tags.map(tag => <Tag key={tag.id}>#{tag.text}</Tag>)}
        </div>
      </Wrapper>
    </>
  );
};

export default PostPresenter;
