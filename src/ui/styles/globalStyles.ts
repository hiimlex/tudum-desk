import { createGlobalStyle, withTheme } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.text};
    background: ${(props) => props.theme.secondary + "99"};
    border-radius: 12px;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
  }

  * {
    margin: 0;
    box-sizing: border-box;
    outline: none;
  }
`;

export default withTheme(GlobalStyles);
