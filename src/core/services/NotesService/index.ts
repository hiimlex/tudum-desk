import { Note } from "../../models";
import store from "../../store";
import {
  addNote,
  editNoteById,
  favoriteById,
  removeNoteById,
  setNotes,
} from "../../store/slicers";

class NotesService {
  setNotes(notes: Note[]): void {
    store.dispatch(setNotes(notes));
  }

  addNote(note: Note): void {
    store.dispatch(addNote(note));
  }

  removeNoteById(id: string): void {
    store.dispatch(removeNoteById(id));
  }

  editNoteById(id: string, note: Note): void {
    store.dispatch(editNoteById({ id, note }));
  }

  favoriteById(id: string): void {
    store.dispatch(favoriteById(id));
  }
}

export default new NotesService();
