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
  console.log(data);
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
  } else if (data && data.searchUser && data.searchPost && data.searchTag) {
    return <div>{searchTerm}</div>;
  } else {
    return <div>where is data?</div>;
  }
};

export default SearchPresenter;
