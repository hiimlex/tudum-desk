import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { notesReducer, themeModalReducer, themeReducer } from "./slicers";

export interface GenericAction<T = any> {
  type: string;
  payload: T;
}

const rootReducer = combineReducers({
  notes: notesReducer,
  themeModal: themeModalReducer,
  theme: themeReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
