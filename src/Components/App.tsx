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
  // console.log(isLoggedIn);
  const smallMedia = window.matchMedia("(min-width: 500px)").matches;
  // const [media, setMedia] = React.useState(smallMedia);
  // console.log(smallMedia);
  // React.useEffect(() => {
  //   smallMedia();
  // }, []);
  // TODO: smallMedia 로 화면 크기에 따라 컴포넌트를 다르게 렌더할 수 있지만 렌더할 때의 환경에 맞게 렌더하는 것이지 렌더 된 뒤에
  // 화면 크기에 따라 유기적으로 변하는 건 아님.
  // styled-component, mediaQuery, className, props 를 이용해서 컴포넌트를 제어할 방법을 찾아야 할 듯.

  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Router>
          <>
            {smallMedia ? <Header /> : <HeaderSmall />}
            <Wrapper>
              <RouterComponent isLoggedIn={isLoggedIn} />
            </Wrapper>
            {smallMedia ? <Footer /> : <FooterSmall />}
            <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
          </>
        </Router>
      </>
    </ThemeProvider>
  );
};

export default App;
