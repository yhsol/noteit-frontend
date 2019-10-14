import * as React from "react";
import styled from "styled-components";
import { FullHeartIcon, EmptyHeartIcon, CommentIcon } from "../../Utils/Icons";
import Avatar from "../../Utils/Avatar";
import { Link } from "react-router-dom";
import { EDIT_POST } from "../EditPost/EditPostQuery";
import { useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";
import ReactMarkdown from "react-markdown";

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
  history: any;
  toggleLike: any;
  isLikedState: boolean;
  likeCountState: number;
}

const Wrapper = styled.div`
  width: 100%;
`;

const TitleGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 4rem;
  justify-content: center;
  align-items: center;
`;

const TitleWrapper = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  margin: 1rem 0;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
`;

const SAvatar = styled.div`
  height: 3rem;
  width: 3rem;
  margin-right: 1.2rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;

const InfoDataItem = styled.span`
  margin-left: 5px;
  color: rgba(0, 0, 0, 0.5);
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

const Button = styled.button`
  width: 4rem;
  height: 2rem;
  color: white;
  font-size: 17px;
  background-color: ${props => props.theme.greyColor};
  border: 0;
  border-radius: ${props => props.theme.borderRadius};
`;

const PostButton = styled.span`
  cursor: pointer;
  display: flex;
  margin-right: 1rem;
  font-size: 14px;
  align-items: center;
`;

const PostButtons = styled.div`
  display: flex;
  ${PostButton} {
    &:first-child {
      margin-right: 10px;
    }
  }
  margin-bottom: 5px;
  align-items: center;
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
  createdAt,
  history,
  toggleLike,
  isLikedState,
  likeCountState
}) => {
  // console.log(history);
  const date = createdAt.toString().substring(0, 10);
  // console.log(user.avatar);
  const image = "https://image.flaticon.com/icons/svg/258/258428.svg";
  const [avatar] = React.useState(user.avatar || image);
  const editPostMutation = useMutation(EDIT_POST);

  const [Action, setAction] = React.useState("EDIT");
  const onSubmit = async () => {
    if (id !== "" && Action !== "") {
      try {
        setAction("DELETE");
        const {
          data: { editPost }
        } = await editPostMutation({
          variables: {
            id,
            title,
            text,
            action: "DELETE"
          }
        });
        console.log(editPost);
        toast.success("delete complete!");
        history.push("/feed");
        window.location.reload();
      } catch (error) {
        toast.error("Can't delete post!");
      }
    }
  };
  return (
    <>
      <Wrapper>
        <TitleGrid>
          <TitleWrapper>
            <Title>{title}</Title>
            <Author>
              <SAvatar>
                <Avatar url={avatar} size={"md"} className={user.avatar} />
              </SAvatar>
              <Info>
                <div>{user.username}</div>
                <div>{date}</div>
              </Info>
            </Author>
          </TitleWrapper>
          <div>
            <Link to={`/editpost/${id}`}>
              <Button>edit</Button>
            </Link>
            <Button onClick={onSubmit}>delete</Button>
          </div>
        </TitleGrid>
        <ReactMarkdown source={text} />

        <FileWrapper>
          {files &&
            files.map(file => (
              <File key={file.id} id={file.id} src={file.url} />
            ))}
        </FileWrapper>
        <div>
          {tags && tags.map(tag => <Tag key={tag.id}>#{tag.text}</Tag>)}
        </div>
        <PostButtons>
          <PostButton onClick={toggleLike}>
            {isLikedState ? (
              <FullHeartIcon size={20} />
            ) : (
              <EmptyHeartIcon size={20} />
            )}
            <InfoDataItem>{likeCountState}</InfoDataItem>
          </PostButton>
          <PostButton>
            <CommentIcon size={20} />
            <InfoDataItem>{commentCount}</InfoDataItem>
          </PostButton>
        </PostButtons>
      </Wrapper>
    </>
  );
};

export default PostPresenter;
