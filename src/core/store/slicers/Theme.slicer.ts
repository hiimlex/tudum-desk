import {
  ActionCreatorWithoutPayload,
  ActionCreatorWithPayload,
  createSlice,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
import { DefaultTheme } from "styled-components";
import { GenericAction } from "..";

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
  reducers: {
    getPersistedTheme: (state) => {
      const theme = localStorage.getItem("theme");

      if (theme) {
        state.theme = JSON.parse(theme);
      } else {
        localStorage.setItem("theme", JSON.stringify(defaultTheme));
      }
    },
    setPrimaryColor: (state, action: GenericAction<string>) => {
      state.theme.primary = action.payload;
    },
    setSecondaryColor: (state, action: GenericAction<string>) => {
      state.theme.secondary = action.payload;
    },
  },
});

const setPrimaryColor: ActionCreatorWithPayload<string> = themeSlice.actions
  .setPrimaryColor as any;

const setSecondaryColor: ActionCreatorWithPayload<string> = themeSlice.actions
  .setSecondaryColor as any;

const getPersistedTheme: ActionCreatorWithoutPayload = themeSlice.actions
  .getPersistedTheme as any;

const themeReducer = themeSlice.reducer;

export { themeReducer, setPrimaryColor, setSecondaryColor, getPersistedTheme };
