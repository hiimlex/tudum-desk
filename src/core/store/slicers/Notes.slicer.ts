import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import { Note } from "../../models";

interface NotesReducerState {
  notes: Note[];
}

const notesSlice = createSlice<
  NotesReducerState,
  SliceCaseReducers<NotesReducerState>
>({
  name: "notes",
  initialState: {
    notes: [],
  },
  reducers: {},
});

const notesReducer = notesSlice.reducer;

export { notesReducer };
