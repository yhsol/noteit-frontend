import * as React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "../Styles/Theme";
import GlobalStyles from "../Styles/GlobalStyles";
import { BrowserRouter as Router } from "react-router-dom";
import RouterComponent from "./RouterComponent";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Router>
          <RouterComponent isLoggedIn={true} />
        </Router>
      </>
    </ThemeProvider>
  );
};

export default App;
