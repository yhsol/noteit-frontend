import * as React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "../Styles/Theme";
import GlobalStyles from "../Styles/GlobalStyles";
import { BrowserRouter as Router } from "react-router-dom";
import RouterComponent from "./RouterComponent";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Header from "./Header";
import styled from "styled-components";
import Footer from "./Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IAppProps {}

const Wrapper = styled.div`
  min-height: calc(100vh - 56px - 3rem);
  margin-top: 56px;
  padding: 14px 23px;
`;

// interface LogInProps {
//   isLoggedIn: boolean;
// }
// useQuery 에서 interface 사용 방법 찾기.
// const {data: { isLoggedIn }} = useQuery(LogInQuery) 같은 식으로 데이터를 꺼낼 때 type 을 지정하는 방법 찾기.
// https://www.apollographql.com/docs/react/recipes/static-typing/ 참조.

const LogInQuery = gql`
  {
    isLoggedIn @client
  }
`;

const App: React.FunctionComponent<IAppProps> = () => {
  const { data } = useQuery(LogInQuery);
  const { isLoggedIn }: { isLoggedIn: boolean } = data;
  console.log(isLoggedIn);

  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Router>
          <>
            <Header />
            <Wrapper>
              <RouterComponent isLoggedIn={isLoggedIn} />
            </Wrapper>
            <Footer />
            <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
          </>
        </Router>
      </>
    </ThemeProvider>
  );
};

export default App;
