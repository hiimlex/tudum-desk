import { AxiosResponse } from "axios";
import api from "../../api";
import { UpdateUser } from "../../models";
import { errorToAxiosError } from "../../utils";

class UserService {
  async updateUser(user: UpdateUser): Promise<AxiosResponse<null>> {
    try {
      const response = await api.put<null, AxiosResponse<null>, UpdateUser>(
        "/users",
        user
      );

      return response;
    } catch (error) {
      throw errorToAxiosError(error);
    }
  }
}

export default new UserService();
