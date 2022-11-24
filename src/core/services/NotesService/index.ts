import { Note } from "../../models";
import {} from "../../store/slicers";

class NotesService {
  setNotes(notes: Note[]): void {}

  addNote(note: Note): void {}

  removeNoteById(id: string): void {}

  editNoteById(id: string, note: Note): void {}

  favoriteById(id: string): void {}
}

export default new NotesService();
