import { AxiosResponse } from "axios";
import api from "../../api";
import { INewNote, INote } from "../../models";
import {} from "../../store/slicers";
import { errorToAxiosError } from "../../utils";

class NotesService {
  async getNotes(): Promise<AxiosResponse<INote[]>> {
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

  async addNote(note: INewNote): Promise<AxiosResponse<null>> {
    try {
      const response = await api.post("/notes", note);

      return response;
    } catch (error) {
      throw errorToAxiosError(error);
    }
  }

  async removeNoteById(id: string): Promise<AxiosResponse<null>> {
    try {
      const response = await api.delete(`/notes/${id}`);

      return response;
    } catch (error) {
      throw errorToAxiosError(error);
    }
  }

  editNoteById(id: string, note: INote): void {}
}

export default new NotesService();
