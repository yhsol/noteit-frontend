import * as React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import Loader from "../../Components/Loader";
import BoldText from "../../Styles/BoldText";
import SearchPage from "../../Utils/SearchPage";
import UserCard from "../../Utils/UserCard";
import PostCard from "../../Utils/PostCard";

const Wrapper = styled.div`
  height: 20rem;
  position: relative;
  top: -8px;
  z-index: 10;
`;

const SearchResultBox = styled.div`
  ${props => props.theme.whiteBox};
`;

const Section = styled.div`
  display: grid;
  grid-template-columns: 20rem;
  grid-auto-rows: 3rem;
  overflow: hidden;
  ${media.lessThan("medium")`
  grid-template-columns: 86vw;
  grid-auto-rows: 3rem;
  align-items: center;
  `}
`;

interface ISearchPresenterProps {
  loading: boolean;
  data: any | undefined;
  searchTerm: string;
}

const SearchPresenter: React.FunctionComponent<ISearchPresenterProps> = ({
  loading,
  data,
  searchTerm
}) => {
  console.log(data);
  // console.log(data.data.searchPost);

  if (searchTerm === undefined) {
    return (
      <Wrapper>
        <SearchPage />;
      </Wrapper>
    );
  } else if (loading === true) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else if (data && data.searchUser && data.searchPost && data.searchTag) {
    return (
      <Wrapper>
        {data.searchUser.length === 0 &&
        data.searchPost.length === 0 &&
        data.searchTag.length === 0 ? (
          <div>
            <BoldText text={`"${searchTerm}" was not found `} />
          </div>
        ) : (
          <>
            <div>
              {data.searchUser.length !== 0 && (
                <div>User Result({data.searchUser.length})</div>
              )}
              {data.searchUser.length === 0
                ? "no serach result for user!"
                : data.searchUser.map((user: any) => (
                    <UserCard
                      key={user.id}
                      username={user.username}
                      url={user.avatar}
                    />
                  ))}
            </div>
            <div>
              {data.searchPost.length !== 0 && (
                <div>Post Result({data.searchPost.length})</div>
              )}
              {data.searchPost.length === 0
                ? "no search result for post!"
                : data.searchPost.map((post: any) => (
                    <PostCard
                      key={post.id}
                      title={post.title}
                      text={post.text}
                      id={post.id}
                    />
                  ))}
            </div>
            <div>
              {data.searchTag.length !== 0 && (
                <div>Tag Reulst({data.searchTag.length})</div>
              )}
              {data.searchTag.length === 0
                ? "no serach result for tag!"
                : data.searchTag.map((tag: any) => (
                    <div>
                      <div>#{tag.text}</div>
                    </div>
                  ))}
            </div>
            {/* 각각을 어떤 식으로 보여줄 것인가.
              user 검색의 경우 아이디와 팔로잉 여부, -> username, isFollowing
              post 검색의 경우 title 과 text 의 일부, -> title, text, username, tag, isLiked, likeCount, commentCount
              tag 의 경우 각 tag 를 포함하는 post 의 title 과 text 의 일부. -> tag, postLink
              각각의 영역을 나누는 방법(아마도 새로 링크를 만들어 각각을 특정하여 보여주는 페이지로 이동) 과
              해당 값들을 보여줄 방식을 생각해 봐야 할 듯.
          */}
          </>
        )}
      </Wrapper>
    );
  } else {
    return <div>where is data?</div>;
  }
};

export default SearchPresenter;
