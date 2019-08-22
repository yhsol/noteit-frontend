import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  width: 100%;
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.0975);
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
        <div>git</div>
        <div>@copyright NOTEIT</div>
      </FooterItems>
    </Wrapper>
  );
};

export default Footer;
