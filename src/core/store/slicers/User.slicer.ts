import {
  ActionCreatorWithPayload,
  createSlice,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
import { GenericAction } from "..";
import { IUser } from "../../models";

interface UserReducerState {
  user?: IUser;
}

const userSlicer = createSlice<
  UserReducerState,
  SliceCaseReducers<UserReducerState>
>({
  name: "user",
  initialState: {},
  reducers: {
    setUser: (state, action: GenericAction<IUser | undefined>) => {
      state.user = action.payload;
    },
  },
});

const setUser: ActionCreatorWithPayload<IUser | undefined> = userSlicer.actions
  .setUser as any;

const userReducer = userSlicer.reducer;

export { userReducer, setUser };
