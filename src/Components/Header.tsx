import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ExploreIcon, CaptionIcon, SettingIcon } from "./Icons";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  height: 56px;
  z-index: 1;
  background-color: ${props => props.theme.backgroundColor};
  transition: height 0.2s ease-in-out;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0 20px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const HeaderItems = styled.li``;

const HeaderItem = styled(Link)`
  margin: 0 5px;
`;

const SideMenu = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.0975);
  z-index: 1;
  height: 50vh;
  left: 0;
  margin-top: 56px;
  transition: width 1s linear;
  padding: 0 20px;
  a {
    color: black;
    margin: 5px 0;
  }
`;

interface IHeaderProps {}

// TODO: sign up page 에서는 header X

const Header: React.FunctionComponent<IHeaderProps> = () => {
  const [menuOpen, setMenuOpen] = React.useState<string>("close");

  const toggleMenu = () => {
    if (menuOpen === "close") {
      setMenuOpen("open");
    } else if (menuOpen === "open") {
      setMenuOpen("close");
    }
  };
  console.log(menuOpen);
  return (
    <>
      <Wrapper>
        <HeaderWrapper>
          <Link to="/">noteit</Link>
          <HeaderItems>
            <HeaderItem to="/search">
              <ExploreIcon />
            </HeaderItem>
            <HeaderItem to="/notification">
              <CaptionIcon />
            </HeaderItem>
            <HeaderItem to="/profile" onClick={toggleMenu}>
              <SettingIcon />
            </HeaderItem>
          </HeaderItems>
          {/* side menu bar 에서 다양한 기능을 보여줘야됨. 
        다른 page 하나를 새로 만들어서 토글 될 때 해당 라우터들을 연결한 page 가 나오게 하는 방식으로 해볼 수 있을 듯. */}
        </HeaderWrapper>
      </Wrapper>

      {menuOpen === "open" && (
        <SideMenu>
          <Link to="profile" onClick={toggleMenu}>
            profile!
          </Link>
          <Link to="profile" onClick={toggleMenu}>
            profile!
          </Link>
          <Link to="profile" onClick={toggleMenu}>
            profile!
          </Link>
          <Link to="profile" onClick={toggleMenu}>
            profile!
          </Link>
          <Link to="profile" onClick={toggleMenu}>
            profile!
          </Link>
        </SideMenu>
      )}
    </>
  );
};

export default Header;
