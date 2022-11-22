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
    notes: [
      {
        id: "1",
        color: "red",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        title: "My first",
        createdAt: "2021-01-01 12:00:00",
        favorite: false,
      },
      {
        id: "2",
        color: "purple",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        title: "My second",
        createdAt: "2021-01-01 12:00:00",
        favorite: true,
      },
    ],
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
    editNoteById: (
      state,
      action: GenericAction<{ id: string; note: Note }>
    ) => {
      state.notes = state.notes.map((note) =>
        note.id === action.payload.id ? action.payload.note : note
      );
    },
    favoriteById: (state, action: GenericAction<string>) => {
      state.notes = state.notes.map((note) =>
        note.id === action.payload
          ? { ...note, favorite: !note.favorite }
          : note
      );
    },
  },
});

const setNotes: ActionCreatorWithPayload<Note[]> = notesSlice.actions
  .setNotes as any;

const addNote: ActionCreatorWithPayload<Note> = notesSlice.actions
  .addNote as any;

const removeNoteById: ActionCreatorWithPayload<string> = notesSlice.actions
  .removeNoteById as any;

const editNoteById: ActionCreatorWithPayload<{ id: string; note: Note }> =
  notesSlice.actions.editNoteById as any;

const favoriteById: ActionCreatorWithPayload<string> = notesSlice.actions
  .favoriteById as any;

const notesReducer = notesSlice.reducer;

export {
  notesReducer,
  setNotes,
  removeNoteById,
  addNote,
  editNoteById,
  favoriteById,
};
