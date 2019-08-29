import * as React from "react";
import styled from "styled-components";
import {
  GithubIcon,
  SearchIcon,
  NotificationIcon,
  UserIcon,
  CommentIcon
} from "../../Utils/Icons";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  width: 100%;
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.08);
`;

const FooterItems = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const HeaderItem = styled(Link)`
  margin: 0 5px;
`;

interface IFooterProps {}

const FooterSmall: React.FunctionComponent<IFooterProps> = props => {
  return (
    <Wrapper>
      <FooterItems>
        {/* <HeaderWrapper> */}
        {/* <Link to="/" style={{ fontSize: "26px", color: "#f7a400" }}>
          noteit
        </Link> */}
        <HeaderItem to="/">
          <GithubIcon />
        </HeaderItem>
        <HeaderItem to="/search">
          <SearchIcon />
        </HeaderItem>
        <HeaderItem to="/uploadpost">
          <CommentIcon />
        </HeaderItem>
        <HeaderItem to="/notification">
          <NotificationIcon />
        </HeaderItem>
        <HeaderItem to="/profile">
          <UserIcon />
        </HeaderItem>
        {/* side menu bar 에서 다양한 기능을 보여줘야됨. 
        다른 page 하나를 새로 만들어서 토글 될 때 해당 라우터들을 연결한 page 가 나오게 하는 방식으로 해볼 수 있을 듯. */}
        {/* </HeaderWrapper> */}
      </FooterItems>
    </Wrapper>
  );
};

export default FooterSmall;
