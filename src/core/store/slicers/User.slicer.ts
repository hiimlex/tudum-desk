import {
  ActionCreatorWithPayload,
  createSlice,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
import { GenericAction } from "..";
import { User } from "../../models";

interface UserReducerState {
  user?: User;
}

const userSlicer = createSlice<
  UserReducerState,
  SliceCaseReducers<UserReducerState>
>({
  name: "user",
  initialState: {},
  reducers: {
    setUser: (state, action: GenericAction<User | undefined>) => {
      state.user = action.payload;
    },
  },
});

const setUser: ActionCreatorWithPayload<User | undefined> = userSlicer.actions
  .setUser as any;

const userReducer = userSlicer.reducer;

export { userReducer, setUser };
