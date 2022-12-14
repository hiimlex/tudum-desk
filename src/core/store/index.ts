import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  modalReducer,
  notesReducer,
  tasksReducer,
  themeReducer,
  userReducer,
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
  tasks: tasksReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
