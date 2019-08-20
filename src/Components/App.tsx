import * as React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "../Styles/Theme";
import GlobalStyles from "../Styles/GlobalStyles";
import { BrowserRouter as Router } from "react-router-dom";
import RouterComponent from "./RouterComponent";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";

interface IAppProps {}

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
          <RouterComponent isLoggedIn={isLoggedIn} />
        </Router>
      </>
    </ThemeProvider>
  );
};

export default App;
