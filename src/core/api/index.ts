import axios from "axios";

const api = axios.create({
  baseURL: "https://tudum-api.vercel.app/api",
});

export default api;
