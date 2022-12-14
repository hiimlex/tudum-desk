import {
  createAsyncThunk,
  createSlice,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
import { NotesService } from "../../";
import { INote } from "../../models";

interface INotesReducerState {
  notes: INote[];
}

const initialState: INotesReducerState = {
  notes: [],
};

const fetchNotes = createAsyncThunk<INote[], undefined>(
  "notes/fetchNotes",
  async (_data, thunkApi) => {
    try {
      const response = await NotesService.getNotes();
      return response.data;
    } catch (error) {
      throw thunkApi.rejectWithValue(error);
    }
  }
);

const notesSlice = createSlice<
  INotesReducerState,
  SliceCaseReducers<INotesReducerState>
>({
  name: "notes",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchNotes.fulfilled, (state, action) => {
      state.notes = action.payload;
    });
  },
});

const notesReducer = notesSlice.reducer;

export { notesReducer, fetchNotes };
