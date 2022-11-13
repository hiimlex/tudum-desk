import {
  ActionCreatorWithPayload,
  createSlice,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
import { GenericAction } from "..";
import { DEFAULT_THEME, ThemeProps } from "../../../ui";

interface ThemeState {
  theme: ThemeProps;
}

const persistedTheme = JSON.parse(localStorage.getItem("theme") || "{}");

const themeSlice = createSlice<ThemeState, SliceCaseReducers<ThemeState>>({
  name: "theme",
  initialState: {
    theme: persistedTheme || DEFAULT_THEME,
  },
  reducers: {
    setPrimaryColor: (state, action: GenericAction<string>) => {
      state.theme.primary = action.payload;
    },
    setSecondaryColor: (state, action: GenericAction<string>) => {
      state.theme.secondary = action.payload;
    },
  },
});

const setPrimaryColor: ActionCreatorWithPayload<string, string> = themeSlice
  .actions.setPrimaryColor as any;

const setSecondaryColor: ActionCreatorWithPayload<string, string> = themeSlice
  .actions.setSecondaryColor as any;

const themeReducer = themeSlice.reducer;

export { themeReducer, setPrimaryColor, setSecondaryColor };
