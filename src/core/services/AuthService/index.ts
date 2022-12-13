import { AxiosResponse } from "axios";
import api from "../../api";
import { NewUser, User } from "../../models";
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

  async getCurrentUser(): Promise<AxiosResponse<User>> {
    try {
      const response = await api.get<User>("/auth/currentUser");

      return response;
    } catch (error) {
      throw errorToAxiosError(error);
    }
  }

  async register(user: NewUser): Promise<AxiosResponse<null>> {
    try {
      const response = await api.post<User, AxiosResponse<null>, NewUser>(
        "/auth/register",
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
