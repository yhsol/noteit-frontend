import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
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
