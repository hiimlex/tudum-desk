import { AxiosResponse } from "axios";
import api from "../../api";
import { INewUser, IUpdateUser, IUser } from "../../models";
import store from "../../store";
import { setUser } from "../../store/slicers";
import { errorToAxiosError } from "../../utils";

class AuthService {
  async login(
    login: string,
    password: string
  ): Promise<AxiosResponse<{ token: string }>> {
    try {
      const response = await api.post<
        { token: string },
        AxiosResponse<{ token: string }>,
        { login: string; password: string }
      >("/auth/login", {
        login,
        password,
      });

      return response;
    } catch (error) {
      throw errorToAxiosError(error);
    }
  }

  async getCurrentUser(): Promise<AxiosResponse<IUser>> {
    try {
      const response = await api.get<IUser>("/auth/currentUser");

      return response;
    } catch (error) {
      throw errorToAxiosError(error);
    }
  }

  async register(user: INewUser): Promise<AxiosResponse<null>> {
    try {
      const response = await api.post<IUser, AxiosResponse<null>, INewUser>(
        "/auth/register",
        user
      );

      return response;
    } catch (error) {
      throw errorToAxiosError(error);
    }
  }

  async updateUser(user: IUpdateUser): Promise<AxiosResponse<null>> {
    try {
      const response = await api.put<null, AxiosResponse<null>, IUpdateUser>(
        "/users",
        user
      );

      return response;
    } catch (error) {
      throw errorToAxiosError(error);
    }
  }

  logout(): void {
    window.localStorage.removeItem("auth-token");
    window.localStorage.removeItem("user");
    store.dispatch(setUser(undefined));
  }
}

export default new AuthService();
