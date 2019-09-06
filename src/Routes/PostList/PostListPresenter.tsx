import * as React from "react";
import styled from "styled-components";
import { FullHeartIcon, EmptyHeartIcon, CommentIcon } from "../../Utils/Icons";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 8fr 2fr;
  width: 80vw;
  margin: 2rem auto;
`;

const TextSection = styled.div``;

const FileSection = styled.div`
  background-color: ${props => props.theme.greyColor};
`;

const InfoData = styled.span`
  margin-right: 1rem;
`;

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

interface IPostListPresenter {
  id: string;
  user: Array<IUserProps>;
  title: string;
  text: string;
  tags: Array<ITagsProps>;
  files: Array<IFilesProps>;
  isLiked: boolean;
  likeCount: number;
  commentCount: number;
  createdAt: number;
  newComment: any;
  setIsLiked: any;
  setLikeCount: any;
  setCommentCount: any;
}
const PostListPresenter: React.FunctionComponent<IPostListPresenter> = ({
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
  newComment,
  setIsLiked,
  setLikeCount,
  setCommentCount
}) => {
  return (
    <Wrapper>
      <TextSection>
        <div>{title}</div>
        <div>{text}</div>
        <div>{id}</div>
        <div>
          <InfoData>
            {isLiked ? <FullHeartIcon /> : <EmptyHeartIcon />}
            {likeCount}
          </InfoData>
          <InfoData>
            <CommentIcon />
            {commentCount}
          </InfoData>
          <InfoData>{tags.length !== 0 ? "tag" : "notag"}</InfoData>
        </div>
      </TextSection>
      <FileSection>{files.length !== 0 ? "file" : "nofile"}</FileSection>
    </Wrapper>
  );
};

export default PostListPresenter;
