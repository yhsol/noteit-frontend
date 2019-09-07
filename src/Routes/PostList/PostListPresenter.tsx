import * as React from "react";
import styled from "styled-components";
import { FullHeartIcon, EmptyHeartIcon, CommentIcon } from "../../Utils/Icons";

const Section = styled.div`
  display: grid;
  /* TODO: grid row 로 높이를 정해야 할 듯. */
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 8fr 2fr;
  margin-bottom: 2rem;
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 0.5rem;
  margin-right: 2rem;
  font-weight: 600;
`;

const SubTitle = styled.div`
  color: rgba(0, 0, 0, 0.55);
  margin-bottom: 1.2rem;
  font-size: 17px;
`;

const Author = styled.div`
  font-size: 15px;
  color: rgba(0, 0, 0, 0.86);
  margin-bottom: 0.3rem;
`;

const FileSection = styled.div`
  background-color: ${props => props.theme.greyColor};
`;

const InfoSection = styled.div`
  display: flex;
  align-items: center;
`;

const InfoData = styled.span`
  display: flex;
  margin-right: 1rem;
  font-size: 14px;
`;

const InfoDataItem = styled.span`
  margin-left: 5px;
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
        <Title>{title}</Title>
        <SubTitle>{text}</SubTitle>
        <Author>{id}</Author>
        <InfoSection>
          <InfoData>
            {isLiked ? (
              <FullHeartIcon size={14} />
            ) : (
              <EmptyHeartIcon size={14} />
            )}
            <InfoDataItem>{likeCount}</InfoDataItem>
          </InfoData>
          <InfoData>
            <CommentIcon size={14} />
            <InfoDataItem>{commentCount}</InfoDataItem>
          </InfoData>
        </InfoSection>
      </TextSection>
      <FileSection>{files.length !== 0 ? "file" : "nofile"}</FileSection>
    </Wrapper>
  );
};

export default PostListPresenter;
