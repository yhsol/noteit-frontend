import * as React from "react";
import { useMutation } from "react-apollo-hooks";
import { TOGGLE_LIKE, ADD_COMMENT } from "./PostQuery";
import PostPresenter from "./PostPresenter";
import useInput from "../../Utils/Hooks/useInput";
import { toast } from "react-toastify";

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
  history: any;
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
  history
}) => {
  const [isLikedState, setIsLiked] = React.useState<boolean>(isLiked);
  const [likeCountState, setLikeCount] = React.useState<number>(likeCount);
  const [commentCountState, setCommentCount] = React.useState<number>(
    commentCount
  );
  const comment = useInput("");
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
      />
    </>
  );
};

export default PostContainer;
