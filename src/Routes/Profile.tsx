import * as React from "react";
import { useQuery, useMutation } from "react-apollo-hooks";
import { POST_QUERY } from "./Post/PostQuery";
import { RouteComponentProps, withRouter } from "react-router";
import PostContaier from "./Post/PostContaier";
import Loader from "../Components/Loader";
import PostListForm from "../Components/LayOut/PostListForm";
import { gql } from "apollo-boost";
export const PROFILE_QUERY = gql`
  query seeUser($username: String!) {
    seeUser(username: $username) {
      id
      username
      avatar
      email
      firstName
      lastName
      itsMe
      bio
      following {
        id
        username
      }
      followers {
        id
        username
      }
      posts {
        id
        user {
          id
          username
        }
        title
        text
        tags {
          id
          text
        }
        files {
          id
          url
        }
        isLiked
        likeCount
        commentCount
        createdAt
        updatedAt
      }
      followingCount
      followersCount
    }
  }
`;

type IPostProps = RouteComponentProps<{ username: string }, any, any>;

const Profile: React.FunctionComponent<IPostProps> = ({
  match: {
    params: { username }
  }
}) => {
  const { data, loading } = useQuery(PROFILE_QUERY, {
    variables: { username }
  });
  const profile = data.seeUser;
  console.log(profile);
  return (
    <>
      {loading && <Loader />}
      {!data && "not data"}
      {!loading && profile && (
        <>
          <div>{profile.username}</div>
          <div>{profile.bio ? "it's bio" : "bio"}</div>
          <div>posts{profile.posts.length}</div>
          <div>follwoing{profile.followingCount}</div>
          <div>followers{profile.followersCount}</div>
          <div>{profile.itsMe ? "it's me!" : "following?"}</div>
        </>
      )}
      {!loading &&
        data &&
        profile &&
        profile.posts.map((post: any) => (
          <PostListForm
            key={post.id}
            id={post.id}
            user={post.user}
            title={post.title}
            text={post.text}
            tags={post.tags}
            files={post.files}
            isLiked={post.isLiked}
            likeCount={post.likeCount}
            commentCount={post.commentCount}
            createdAt={post.createdAt}
            updatedAt={post.updatedAt}
          />
        ))}
    </>
  );
};

export default withRouter(Profile);
