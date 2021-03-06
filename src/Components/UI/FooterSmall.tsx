import * as React from "react";
import styled from "styled-components";
import {
  SearchIcon,
  NotificationIcon,
  UserIcon,
  PenIcon,
  HomeIcon
} from "../../Utils/Icons";
import { Link } from "react-router-dom";
import { useQuery } from "react-apollo-hooks";
import { ME } from "../../SharedQuery";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 3rem;
  background-color: ${props => props.theme.backgroundColor};
`;

const FooterItems = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

const HeaderItem = styled(Link)`
  margin: 0 5px;
`;

interface IFooterProps {}

const FooterSmall: React.FunctionComponent<IFooterProps> = () => {
  const { data } = useQuery(ME);
  return (
    <Wrapper>
      <FooterItems>
        {/* <HeaderWrapper> */}
        {/* <Link to="/" style={{ fontSize: "26px", color: "#f7a400" }}>
          noteit
        </Link> */}
        <HeaderItem to="/">
          <HomeIcon />
        </HeaderItem>
        <HeaderItem to="/search">
          <SearchIcon />
        </HeaderItem>
        <HeaderItem to="/uploadpost">
          <PenIcon />
        </HeaderItem>
        <HeaderItem to="/notification">
          <NotificationIcon />
        </HeaderItem>
        {data.me ? (
          <HeaderItem to={`/profile/${data.me.username}`}>
            <UserIcon />
          </HeaderItem>
        ) : (
          <HeaderItem to="/">
            <UserIcon />
          </HeaderItem>
        )}
        {/* side menu bar 에서 다양한 기능을 보여줘야됨. 
        다른 page 하나를 새로 만들어서 토글 될 때 해당 라우터들을 연결한 page 가 나오게 하는 방식으로 해볼 수 있을 듯. */}
        {/* </HeaderWrapper> */}
      </FooterItems>
    </Wrapper>
  );
};

export default FooterSmall;
