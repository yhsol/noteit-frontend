import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }
    body {
        background-color: ${props => props.theme.backgroundColor};
        color: ${props => props.theme.blackColor};
    }
    a {
        color: ${props => props.theme.blackColor};
        text-decoration: none;
    }
    input {
        outline: none;
    }
`;
