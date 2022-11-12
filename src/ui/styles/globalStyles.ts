import { createGlobalStyle, withTheme } from "styled-components";
import { ThemeProps } from "./themes";

export type GlobalThemeProps = {
  theme: ThemeProps;
};

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    color: ${(props: GlobalThemeProps) => props.theme.text};
    background: ${(props: GlobalThemeProps) => props.theme.secondary + "66"};
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
