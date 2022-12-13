import { AxiosResponse } from "axios";
import api from "../../api";
import { Note } from "../../models";
import {} from "../../store/slicers";
import { errorToAxiosError } from "../../utils";

class NotesService {
  async getNotes(): Promise<AxiosResponse<Note[]>> {
    try {
      const response = await api.get("/notes");

      return response;
    } catch (error) {
      throw errorToAxiosError(error);
    }
  }

  async favoriteById(id: string): Promise<AxiosResponse<null>> {
    try {
      const response = await api.put(`/notes/favorite/${id}`);

      return response;
    } catch (error) {
      throw errorToAxiosError(error);
    }
  }

  addNote(note: Note): void {}

  removeNoteById(id: string): void {}

  editNoteById(id: string, note: Note): void {}
}

export default new NotesService();
