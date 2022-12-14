import { AxiosResponse } from "axios";
import api from "../../api";
import { INewTodo, ITask } from "../../models";
import { errorToAxiosError } from "../../utils";

class TasksService {
  async getList(): Promise<AxiosResponse<ITask>> {
    try {
      const response = await api.get("/checklists/user");

      return response;
    } catch (error) {
      throw errorToAxiosError(error);
    }
  }

  async createTodo(todo: INewTodo): Promise<AxiosResponse<null>> {
    try {
      const response = await api.post("/checklists", todo);

      return response;
    } catch (error) {
      throw errorToAxiosError(error);
    }
  }

  async doneTodo(done: boolean, id: string): Promise<AxiosResponse<null>> {
    try {
      const response = await api.put(`/checklists/${id}`, { done });

      return response;
    } catch (error) {
      throw errorToAxiosError(error);
    }
  }
}

export default new TasksService();
