import * as React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "../Styles/Theme";
import GlobalStyles from "../Styles/GlobalStyles";
import { BrowserRouter as Router } from "react-router-dom";
import RouterComponent from "./RouterComponent";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Header from "./LayOut/Header";
import styled from "styled-components";
import Footer from "./LayOut/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FooterSmall from "./LayOut/FooterSmall";
import HeaderSmall from "./LayOut/HeaderSmall";

interface IAppProps {}

const SmallWrapper = styled.div`
  min-height: calc(100vh - 56px - 3rem);
  margin-top: 56px;
  padding: 14px 23px;
`;

const Wrapper = styled.div`
  min-height: calc(100vh - 56px - 3rem);
  width: 71%;
  margin: 0 auto;
  margin-top: 56px;
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

  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Router>
          <>
            {smallMedia ? (
              <>
                {isLoggedIn && <Header />}
                <Wrapper>
                  <RouterComponent isLoggedIn={isLoggedIn} />
                </Wrapper>
                <Footer />
              </>
            ) : (
              <>
                {isLoggedIn && <HeaderSmall />}
                <SmallWrapper>
                  <RouterComponent isLoggedIn={isLoggedIn} />
                </SmallWrapper>
                <FooterSmall />
              </>
            )}
            <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
          </>
        </Router>
      </>
    </ThemeProvider>
  );
};

export default App;
