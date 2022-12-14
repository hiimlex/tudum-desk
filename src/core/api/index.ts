import axios, { AxiosError } from "axios";
import { AuthService } from "../services";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use((config) => {
  const token = window.localStorage.getItem("auth-token");

  if (token) {
    config.headers = { ...config.headers, Authorization: `Bearer ${token}` };
  }

  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response) {
      if (error.response.status === 401) {
        AuthService.logout();
        window.location.reload()
      }
    }
  }
);

export default api;
