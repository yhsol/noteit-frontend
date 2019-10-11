import * as React from "react";
import styled from "styled-components";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import {
  NotificationIcon,
  UserIcon,
  ExploreIcon,
  PenIcon,
  SearchIcon
} from "../../Utils/Icons";
import useInput from "../../Utils/Hooks/useInput";
import Input from "../../Utils/Input";
import { useQuery } from "react-apollo-hooks";
import { ME } from "../../SharedQuery";
import media from "styled-media-query";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
  width: 71%;
`;

const SearchForm = styled.form`
  ${media.lessThan("medium")`display: none;`}
`;

const SearchIconForm = styled(Link)`
  ${media.greaterThan("medium")`
  display: none;
  `}
`;

const HeaderItems = styled.li`
  list-style: none;
`;

const HeaderItem = styled(Link)`
  margin: 0 5px;
`;

const SideMenuButton = styled.button`
  border: none;
  background-color: inherit;
  cursor: pointer;
`;

const SideMenu = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.0975);
  z-index: 1;
  height: 120%;
  left: 0;
  margin: 56px 0 14px;
  transition: width 1s linear;
  padding: 12px 20px;
  a {
    color: black;
    margin: 5px 0;
  }
`;

type IHeaderProps = RouteComponentProps;

// TODO: sign up page 에서는 header X -> useReducer, Context 쓰면 될 듯.

const Header: React.FunctionComponent<IHeaderProps> = props => {
  const [menuOpen, setMenuOpen] = React.useState<string>("close");

  const toggleMenu = () => {
    if (menuOpen === "close") {
      setMenuOpen("open");
    } else if (menuOpen === "open") {
      setMenuOpen("close");
    }
  };

  const search = useInput("");
  const onSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.history.push(`/search?term=${search.value}`);
  };

  const { data } = useQuery(ME);

  return (
    <>
      <Wrapper>
        <HeaderWrapper>
          <Link to="/" style={{ fontSize: "26px", color: "#f7a400" }}>
            noteit
          </Link>
          <SearchForm onSubmit={onSearchSubmit}>
            <Input
              value={search.value}
              onChange={search.onChange}
              placeholder="search.."
              icon={true}
            />
          </SearchForm>
          <HeaderItems>
            <SearchIconForm to="/search">
              <SearchIcon />
            </SearchIconForm>
            <HeaderItem to="/uploadpost">
              <PenIcon />
            </HeaderItem>
            <HeaderItem to="/explore">
              <ExploreIcon />
            </HeaderItem>
            <HeaderItem to="/notification">
              <NotificationIcon />
            </HeaderItem>
            {!data.me ? (
              <SideMenuButton>
                <UserIcon />
              </SideMenuButton>
            ) : (
              <SideMenuButton onClick={toggleMenu}>
                <UserIcon />
              </SideMenuButton>
            )}
          </HeaderItems>
          {/* side menu bar 에서 다양한 기능을 보여줘야됨. 
        다른 page 하나를 새로 만들어서 토글 될 때 해당 라우터들을 연결한 page 가 나오게 하는 방식으로 해볼 수 있을 듯. */}
        </HeaderWrapper>
      </Wrapper>

      {menuOpen === "open" && (
        <SideMenu>
          {!data.me ? (
            <Link to="/profile">profile</Link>
          ) : (
            <Link to={`/profile/${data.me.username}`}>profile</Link>
          )}
          <Link to="/profile" onClick={toggleMenu}>
            post
          </Link>
          <Link to="/profile" onClick={toggleMenu}>
            bookmark
          </Link>
          <Link to="/profile" onClick={toggleMenu}>
            settings
          </Link>
          <Link to="profile" onClick={toggleMenu}>
            sign out
          </Link>
        </SideMenu>
      )}
    </>
  );
};

export default withRouter(Header);
