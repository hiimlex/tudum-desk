import { Note } from "../../models";
import store from "../../store";
import {
  addNote,
  editNoteById,
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
}

export default new NotesService();
