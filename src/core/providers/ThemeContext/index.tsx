import React from "react";
import { ThemeProvider } from "styled-components";
import useCustomTheme from "../../hooks/useCustomTheme";

export type ThemeContextProps = {
  children: React.ReactNode;
};

const ThemeContext = ({ children }: ThemeContextProps) => {
  const { theme } = useCustomTheme();

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeContext;
