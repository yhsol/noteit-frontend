import * as React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "../Styles/Theme";
import GlobalStyles from "../Styles/GlobalStyles";
import { HashRouter as Router } from "react-router-dom";
import RouterComponent from "./RouterComponent";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Header from "./UI/Header";
import styled from "styled-components";
import Footer from "./UI/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FooterSmall from "./UI/FooterSmall";
import HeaderSmall from "./UI/HeaderSmall";
import media from "styled-media-query";

interface IAppProps {}

interface StyleProps {
  section: boolean;
}

const AppWrapper = styled.div``;

const BigSection = styled.div<StyleProps>`
  ${media.lessThan("medium")`display: none;`}
`;

const SmallSection = styled.div<StyleProps>`
  ${media.greaterThan("medium")`display: none;`}
`;

const SmallWrapper = styled.div`
  min-height: calc(100vh - 56px - 3rem);
  margin-top: 56px;
  margin-bottom: 5rem;
  padding: 14px 23px;
`;

const Wrapper = styled.div`
  min-height: calc(100vh - 56px - 3rem);
  width: 50%;
  margin: 0 auto;
  ${media.lessThan("large")`width: 60%;`}

  /* margin-top: 8rem; */
  margin-bottom: 5rem;
  padding: 14px 23px;
`;

const LogInQuery = gql`
  {
    isLoggedIn @client
  }
`;

const App: React.FunctionComponent<IAppProps> = () => {
  const { data } = useQuery(LogInQuery);
  const { isLoggedIn }: { isLoggedIn: boolean } = data;
  const smallMedia = window.matchMedia("(min-width: 500px)").matches;
  console.log(smallMedia);
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Router>
          <>
            <AppWrapper>
              <BigSection section={smallMedia}>
                {isLoggedIn && <Header />}
                <Wrapper>
                  <RouterComponent isLoggedIn={isLoggedIn} />
                </Wrapper>
                <Footer />
              </BigSection>
              <SmallSection section={smallMedia}>
                {isLoggedIn && <HeaderSmall />}
                <SmallWrapper>
                  <RouterComponent isLoggedIn={isLoggedIn} />
                </SmallWrapper>
                {isLoggedIn ? <FooterSmall /> : <Footer />}
              </SmallSection>
            </AppWrapper>

            <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
          </>
        </Router>
      </>
    </ThemeProvider>
  );
};

export default App;
