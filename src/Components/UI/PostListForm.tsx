/* TODO: grid row 로 높이를 정해야 할 듯. */
// TODO: lazyloading 적용해야 할 듯.
import * as React from "react";
import styled from "styled-components";
import { FullHeartIcon, EmptyHeartIcon, CommentIcon } from "../../Utils/Icons";
import { Link } from "react-router-dom";

const Section = styled.div`
  display: grid;
  margin-bottom: 2rem;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 8fr 2fr;
  grid-auto-rows: 100px;
  grid-template-rows: 100px;
  margin-bottom: 2rem;
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 0.5rem;
  margin-right: 2rem;
  font-weight: 600;
  :hover {
    color: ${props => props.theme.uiColorOrange};
  }
`;

const SubTitle = styled.div`
  color: rgba(0, 0, 0, 0.55);
  margin-bottom: 0.5rem;
  font-size: 17px;
`;

const Author = styled.div`
  font-size: 15px;
  color: rgba(0, 0, 0, 0.86);
  margin-bottom: 0.3rem;
`;

const FileSection = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const File = styled.img`
  max-width: 100%;
  top: 0;
  height: 100%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  transition: opacity 0.5s linear;
`;

const InfoSection = styled.div`
  display: flex;
  align-items: center;
`;

const InfoData = styled.span`
  display: flex;
  margin-right: 1rem;
  font-size: 14px;
  align-items: center;
`;

const InfoDataItem = styled.span`
  margin-left: 5px;
  color: rgba(0, 0, 0, 0.5);
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
const PostListForm: React.FunctionComponent<IPostListPresenter> = ({
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
  const { username } = user;
  const date = createdAt.toString().substring(0, 10);
  const markdownText = () =>
    text.length > 73 ? `${text.substring(0, 73)}...` : text;

  return (
    <Section>
      <Wrapper>
        <TextSection>
          <Link to={id && `post/${id}`}>
            <Title>{title}</Title>
          </Link>
          <Link to={username && `profile/${username}`}>
            <Author>{username}</Author>
          </Link>
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
            <InfoData>
              <InfoDataItem>{date}</InfoDataItem>
            </InfoData>
          </InfoSection>
        </TextSection>
        <Link to={id && `post/${id}`}>
          <FileSection>
            {files &&
              files.map((file, index) => (
                <File key={file.id} src={file.url} hidden={index !== 0} />
              ))}
          </FileSection>
        </Link>
      </Wrapper>
    </Section>
  );
};

export default PostListForm;
