import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { notesReducer, themeReducer } from "./slicers";
import { modalReducer } from "./slicers/Modal.slicer";

export interface GenericAction<T = any> {
  type: string;
  payload: T;
}

const rootReducer = combineReducers({
  notes: notesReducer,
  theme: themeReducer,
  modal: modalReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
