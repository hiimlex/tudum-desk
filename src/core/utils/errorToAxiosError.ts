import { AxiosError } from "axios";

export function errorToAxiosError(err: any): AxiosError {
  const { message, code, config, request, response } = err;

  return new AxiosError(message, code, config, request, response);
}
