import * as React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import Loader from "../../Components/Loader";
import BoldText from "../../Styles/BoldText";

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
  loading: any;
  data: any;
  searchTerm: string;
}

const SearchPresenter: React.FunctionComponent<ISearchPresenterProps> = ({
  loading,
  data,
  searchTerm
}) => {
  const searchUser = data.searchUser;
  const searchPost = data.searchPost;
  const searchTag = data.searchTag;
  // console.log(data.searchPost);
  if (searchTerm === undefined) {
    return (
      <Wrapper>
        <BoldText text={"Search for something!"} />
      </Wrapper>
    );
  } else if (loading === true) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else if (data && searchUser && searchPost && searchTag) {
    return (
      <Wrapper>
        {searchUser.length === 0 &&
        searchPost.length === 0 &&
        searchTag.length === 0 ? (
          <div>
            <BoldText text={`"${searchTerm}" was not found `} />
          </div>
        ) : (
          <>
            <div>
              {searchUser.length !== 0 && (
                <div>User Result({searchUser.length})</div>
              )}
              {searchUser.length === 0
                ? "no serach result for user!"
                : searchUser.map((user: any) => (
                    <div key={user.id}>
                      {user.username}
                      <div>
                        {user.isFollowing ? "isFollowing!" : "isNotFollowing!"}
                      </div>
                    </div>
                  ))}
            </div>
            <div>
              {searchPost.length !== 0 && (
                <div>Post Result({searchPost.length})</div>
              )}
              {searchPost.length === 0
                ? "no search result for post!"
                : searchPost.map((post: any) => (
                    <div key={post.id}>
                      <div>{post.title}</div>
                      <div>{post.text.substring(0, 50)}</div>
                    </div>
                  ))}
            </div>
            <div>
              {searchTag.length !== 0 && (
                <div>Tag Reulst({searchTag.length})</div>
              )}
              {searchTag.length === 0
                ? "no serach result for tag!"
                : searchTag.map((tag: any) => (
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
