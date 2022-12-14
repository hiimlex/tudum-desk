import {
  createAsyncThunk,
  createSlice,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
import { ITodo } from "../../models";
import { TasksService } from "../..";

interface IChecklistReducerState {
  todos: ITodo[];
  owner: any;
}

const initialState: IChecklistReducerState = {
  todos: [],
  owner: null,
};

const fetchTodos = createAsyncThunk<ITodo[], undefined>(
  "tasks/fetchTask",
  async (_data, thunkApi) => {
    try {
      const response = await TasksService.getList();

      return response.data.todos;
    } catch (error) {
      throw thunkApi.rejectWithValue(error);
    }
  }
);

const tasksSlice = createSlice<
  IChecklistReducerState,
  SliceCaseReducers<IChecklistReducerState>
>({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
  },
});

const tasksReducer = tasksSlice.reducer;

export { tasksReducer, fetchTodos };
