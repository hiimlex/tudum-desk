import {
  ActionCreatorWithPayload,
  createSlice,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
import { GenericAction } from "..";
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
  reducers: {
    setNotes: (state, action: GenericAction<Note[]>) => {
      state.notes = action.payload;
    },
    favoriteById: (state, action: GenericAction<string>) => {
      const note = state.notes.find((note) => note._id === action.payload);

      if (note) {
        note.favorite = !note.favorite;
      }
    },
  },
});

const setNotes: ActionCreatorWithPayload<Note[]> = notesSlice.actions
  .setNotes as any;

const favoriteById: ActionCreatorWithPayload<string> = notesSlice.actions
  .favoriteById as any;

const notesReducer = notesSlice.reducer;

export { notesReducer, setNotes, favoriteById };
