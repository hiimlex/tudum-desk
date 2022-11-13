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
    addNote: (state, action: GenericAction<Note>) => {
      state.notes.push(action.payload);
    },
    removeNoteById: (state, action: GenericAction<string>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
  },
});

const setNotes: ActionCreatorWithPayload<Note[]> = notesSlice.actions
  .setCategories as any;

const addNote: ActionCreatorWithPayload<Note> = notesSlice.actions
  .addNote as any;

const removeNoteById: ActionCreatorWithPayload<string> = notesSlice.actions
  .removeNoteById as any;

const notesReducer = notesSlice.reducer;

export { notesReducer, setNotes, removeNoteById, addNote };
