import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  notesReducer,
  themeReducer,
  userReducer,
  modalReducer,
} from "./slicers";

export interface GenericAction<T = any> {
  type: string;
  payload: T;
}

const rootReducer = combineReducers({
  notes: notesReducer,
  theme: themeReducer,
  modal: modalReducer,
  user: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
