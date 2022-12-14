import {
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

export type TThemeProps = DefaultTheme;

export const defaultTheme: TThemeProps = {
  background: "#ffffff",
  backgroundContrast: "#efefef",
  text: "#4a4b4c",
  textLighter: "#6a6b6c",
  primary: colors.yellow,
  secondary: colors.orange,
  colors: colors,
};

interface ThemeState {
  theme: TThemeProps;
}

const themeSlice = createSlice<ThemeState, SliceCaseReducers<ThemeState>>({
  name: "theme",
  initialState: {
    theme: defaultTheme,
  },
  reducers: {
    setTheme: (
      state,
      action: GenericAction<{ primary?: string; secondary?: string }>
    ) => {
      if (action.payload.primary) {
        state.theme.primary = action.payload.primary;
      }

      if (action.payload.secondary) {
        state.theme.secondary = action.payload.secondary;
      }
    },
  },
});

const setTheme: ActionCreatorWithPayload<{
  primary: string;
  secondary: string;
}> = themeSlice.actions.setTheme as any;

const themeReducer = themeSlice.reducer;

export { themeReducer, setTheme };
