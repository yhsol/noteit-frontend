import * as React from "react";
import { useMutation } from "react-apollo-hooks";
import { TOGGLE_LIKE, ADD_COMMENT } from "./PostQuery";
import PostPresenter from "./PostPresenter";
import useInput from "../../Utils/Hooks/useInput";
import { toast } from "react-toastify";
import { History } from "history";
import { IUserProps, ITagsProps, IFilesProps } from "../../SharedTypes";

interface IPostContaienr {
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
  comments: string;
}

const PostContainer: React.FunctionComponent<IPostContaienr> = ({
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
  comments
}) => {
  const [isLikedState, setIsLiked] = React.useState<boolean>(isLiked);
  const [likeCountState, setLikeCount] = React.useState<number>(likeCount);
  const [commentCountState, setCommentCount] = React.useState<number>(
    commentCount
  );
  const [stateComment, setStateComment] = React.useState<any>([]);
  const comment = useInput("");
  const [fakeComment, setFakeComment] = React.useState("");
  const toggleLikeMutation = useMutation(TOGGLE_LIKE, {
    variables: { postId: id }
  });
  const addCommentMutation = useMutation(ADD_COMMENT, {
    variables: { postId: id, text: comment.value }
  });
  const toggleLike = async () => {
    if (isLikedState === true) {
      setIsLiked(false);
      setLikeCount(likeCountState - 1);
    } else {
      setIsLiked(true);
      setLikeCount(likeCountState + 1);
    }
    try {
      // throw Error();
      await toggleLikeMutation();
    } catch (error) {
      // setIsLiked(!isLikedState);
      toast.error("Can't Like!");
    }
  };

  const onKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { which } = e;
    if (which === 13) {
      e.preventDefault();
      try {
        const {
          data: { addComment }
        } = await addCommentMutation();
        console.log(addComment);
        setStateComment([...stateComment, addComment]);
        setFakeComment(comment.value);
        comment.setValue("");
      } catch (error) {
        toast.error("Can't add Comment!");
        console.error(error);
      }
    }
    return;
  };

  return (
    <>
      <PostPresenter
        id={id}
        user={user}
        title={title}
        text={text}
        tags={tags}
        files={files}
        isLiked={isLiked}
        likeCount={likeCount}
        commentCount={commentCount}
        createdAt={createdAt}
        history={history}
        toggleLike={toggleLike}
        isLikedState={isLikedState}
        likeCountState={likeCountState}
        onKeyPress={onKeyPress}
        comments={comments}
        createComment={comment}
        stateComment={stateComment}
        fakeComment={fakeComment}
      />
    </>
  );
};

export default PostContainer;
