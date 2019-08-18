import * as React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "../Styles/Theme";
import GlobalStyles from "../Styles/GlobalStyles";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
