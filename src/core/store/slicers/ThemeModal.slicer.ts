import {
  ActionCreatorWithoutPayload,
  createSlice,
  SliceCaseReducers,
} from "@reduxjs/toolkit";

interface ThemeModalState {
  show: boolean;
}

const themeModalSlice = createSlice<
  ThemeModalState,
  SliceCaseReducers<ThemeModalState>
>({
  name: "themeModal",
  initialState: {
    show: false,
  },
  reducers: {
    showThemeModal: (state) => {
      state.show = true;
    },
    hideThemeModal: (state) => {
      state.show = false;
    },
  },
});

const showThemeModal: ActionCreatorWithoutPayload = themeModalSlice.actions
  .showThemeModal as any;

const hideThemeModal: ActionCreatorWithoutPayload = themeModalSlice.actions
  .hideThemeModal as any;

const themeModalReducer = themeModalSlice.reducer;

export { themeModalReducer, showThemeModal, hideThemeModal };
