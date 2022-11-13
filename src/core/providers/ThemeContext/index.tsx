import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { RootState } from "../../store";

export type ThemeContextProps = {
  children: React.ReactNode;
};

const ThemeContext = ({ children }: ThemeContextProps) => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeContext;
