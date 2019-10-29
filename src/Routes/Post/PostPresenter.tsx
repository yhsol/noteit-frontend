import * as React from "react";
import styled from "styled-components";
import { FullHeartIcon, EmptyHeartIcon, CommentIcon } from "../../Utils/Icons";
import Avatar from "../../Utils/Avatar";
import { Link } from "react-router-dom";
import { EDIT_POST } from "../EditPost/EditPostQuery";
import { useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";
import ReactMarkdown from "react-markdown";
import { History } from "history";
import TextAreaAutosize from "react-autosize-textarea";

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

interface InputProps {
  value: string;
  onChange(e?: React.ChangeEvent<HTMLInputElement>): void;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

interface CommentProps {
  id: string;
  text: string;
  user: IUserProps;
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
  history: History<any>;
  toggleLike: () => Promise<void>;
  isLikedState: boolean;
  likeCountState: number;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  createComment: InputProps;
  comments: any;
  stateComment: any;
  fakeComment: any;
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

const PostSection = styled.div`
  min-height: 44vh;
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
  display: inline-block;
  width: 300px;
  height: 300px;
`;

const File = styled.img`
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
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

const CommentInput = styled.input`
  width: 100%;
  height: 2rem;
  border: none;
  padding: 10px;
  margin-top: 2rem;
  border: ${props => props.theme.boxBorder};
  &:focus {
    outline: none;
  }
  resize: none;
  font-size: 12px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
  likeCountState,
  onKeyPress,
  comments,
  createComment,
  stateComment,
  fakeComment
}) => {
  // console.log(history);
  const date = createdAt.toString().substring(0, 10);
  // console.log(user.avatar);
  const image = "https://image.flaticon.com/icons/svg/258/258428.svg";
  const [avatar] = React.useState(user.avatar || image);
  const editPostMutation = useMutation(EDIT_POST);
  console.log(comments);
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
        <PostSection>
          <ReactMarkdown source={text} />

          {files &&
            files.map(file => (
              <FileWrapper>
                <File key={file.id} id={file.id} src={file.url} />
              </FileWrapper>
            ))}
        </PostSection>
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
        {comments &&
          comments.map((comment: CommentProps) => (
            <div key={comment.id}>
              <span>{comment.user.username}</span>
              {comment.text}
            </div>
          ))}
        <div>
          <span>{fakeComment !== "" && user.username}</span>
          {fakeComment}
        </div>
        <CommentInput
          type="text"
          name="comment"
          placeholder="comment"
          onKeyPress={onKeyPress}
          value={createComment.value}
          onChange={createComment.onChange}
        />
      </Wrapper>
    </>
  );
};

export default PostPresenter;
