import { createGlobalStyle, withTheme } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.text};
    background: ${({ theme }) => theme.background + "66"};
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

  span.ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 600ms linear;
    background-color: rgba(255, 255, 255, 0.7);
  }

  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;

export default withTheme(GlobalStyles);
