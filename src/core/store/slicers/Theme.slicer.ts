import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import { DefaultTheme } from "styled-components";

export type ColorsType =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "teal"
  | "blue"
  | "purple"
  | "pink"
  | "white"
  | "darkGray"
  | "black";

export const colors: Record<ColorsType, string> = {
  red: "#FFADAD",
  orange: "#FFD6A5",
  yellow: "#FDFFB6",
  green: "#CAFFBF",
  teal: "#9BF6FF",
  blue: "#A0C4FF",
  purple: "#BDB2FF",
  pink: "#FFC6FF",
  white: "#FFFFFc",
  darkGray: "#cdcdcd",
  black: "#3a3b3c",
};

export type ThemeProps = DefaultTheme;

export const defaultTheme: ThemeProps = {
  background: "#efefef",
  text: "#3a3b3c",
  textLighter: "#6a6b6c",
  primary: colors.yellow,
  secondary: colors.orange,
  colors: colors,
};

interface ThemeState {
  theme: ThemeProps;
}

const themeSlice = createSlice<ThemeState, SliceCaseReducers<ThemeState>>({
  name: "theme",
  initialState: {
    theme: defaultTheme,
  },
  reducers: {},
});

const themeReducer = themeSlice.reducer;

export { themeReducer };
