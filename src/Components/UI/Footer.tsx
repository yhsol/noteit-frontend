import * as React from "react";
import styled from "styled-components";
import { GithubIcon } from "../../Utils/Icons";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  width: 100%;
  height: 3rem;
  background-color: ${props => props.theme.backgroundColor};
  position: fixed;
`;

const FooterItems = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 80%;
`;

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = props => {
  return (
    <Wrapper>
      <FooterItems>
        <a href="https://github.com/yhsol" target="blank">
          <GithubIcon />
        </a>
        <div>@copyright NOTEIT</div>
      </FooterItems>
    </Wrapper>
  );
};

export default Footer;
