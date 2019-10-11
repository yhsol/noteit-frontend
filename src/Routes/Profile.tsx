import * as React from "react";
import { useQuery, useMutation } from "react-apollo-hooks";
import { RouteComponentProps, withRouter } from "react-router";
import Loader from "../Components/Loader";
import PostListForm from "../Components/LayOut/PostListForm";
import { gql } from "apollo-boost";
import styled from "styled-components";
import BoldText from "../Styles/BoldText";
import media from "styled-media-query";
import Avatar from "../Utils/Avatar";
import Button from "../Utils/Button";
import { FOLLOW } from "../Components/Follow/FollowQuery";
import { SettingIcon } from "../Utils/Icons";

export const PROFILE_QUERY = gql`
  query seeUser($username: String!) {
    seeUser(username: $username) {
      id
      username
      avatar
      email
      firstName
      lastName
      fullName
      isFollowing
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

const LOGOUT = gql`
  mutation logUserOut {
    logUserOut @client
  }
`;

const Wrapper = styled.div`
  padding-top: 1rem;
  min-height: 80vh;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  margin-bottom: 2rem;
  padding: 0px 0px 1.7rem;
  border-bottom: 1px solid ${props => props.theme.greyColor};
`;

const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderItems = styled.div``;

const HeaderItemsRows = styled.div`
  display: flex;
  align-items: center;
`;

const UserTitle = styled.span`
  margin-right: 14px;
  font-size: 19px;
  display: block;
`;

const UserButtonList = styled.div`
  display: flex;
  align-items: center;
`;

const UserButton = styled.div`
  margin-right: 10px;
  align-items: center;
  display: flex;
`;

const Counts = styled.ul`
  display: flex;
  margin: 15px 0px;
  padding: 0;
`;

const Count = styled.li`
  font-size: 14px;
  &:not(:last-child) {
    margin-right: 10px;
  }
  list-style: none;
`;

const FullName = styled(BoldText)`
  font-size: 14px;
`;

const Bio = styled.p`
  margin: 10px 0px;
`;

const StyledAvatar = styled(Avatar)`
  width: 150px;
  height: 150px;
  ${media.lessThan("medium")`width: 50px; height: 50px;`}
`;

const StyledButton = styled(Button)`
  ${media.lessThan("medium")`width: 5rem; height: 1.4rem;`};
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
  const logOut = useMutation(LOGOUT);

  const profile = data.seeUser;

  const image = "https://image.flaticon.com/icons/svg/258/258428.svg";
  const [avatar, setAvatar] = React.useState(data.avatar || image);
  // console.log(profile);
  return (
    <>
      {loading && <Loader />}
      {!data && "not data"}
      {!loading && profile && (
        <>
          <Wrapper>
            <Header>
              <HeaderItems>
                <StyledAvatar size={"lg"} url={avatar} className="" />
              </HeaderItems>
              <HeaderTitle>
                <HeaderItems>
                  <HeaderItemsRows>
                    <UserTitle>{profile.username}</UserTitle>
                    {profile.itsMe ? (
                      <UserButtonList>
                        <UserButton>
                          <SettingIcon />
                        </UserButton>
                        <UserButton>
                          <StyledButton onClick={logOut} text="Log Out" />
                        </UserButton>
                      </UserButtonList>
                    ) : (
                      <FOLLOW
                        isFollowing={profile.isFollowing}
                        id={profile.id}
                      />
                    )}
                  </HeaderItemsRows>
                </HeaderItems>
                <Counts>
                  <Count>
                    <BoldText text={String(profile.posts.length)} /> posts
                  </Count>
                  <Count>
                    <BoldText text={String(profile.followingCount)} /> followers
                  </Count>
                  <Count>
                    <BoldText text={String(profile.followersCount)} /> following
                  </Count>
                </Counts>
                <FullName text={profile.fullName} />
                <Bio>{profile.bio ? profile.bio : "it's bio section!"}</Bio>
              </HeaderTitle>
            </Header>
            {profile.posts.map((post: any) => (
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
          </Wrapper>
        </>
      )}
    </>
  );
};

export default withRouter(Profile);
