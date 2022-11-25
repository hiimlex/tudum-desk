import { createGlobalStyle, withTheme } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.text};
    background: ${({ theme }) => theme.background + "66"};
    width: 100vw;
    max-height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
  }

  * {
    margin: 0;
    box-sizing: border-box;
    outline: none;
    -webkit-app-region: no-drag;
    font-family: 'Poppins', sans-serif;
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

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.primary}; 

  transition: all 0.1s ease-in-out;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${({ theme }) => theme.secondary}; 
}
`;

export default withTheme(GlobalStyles);
