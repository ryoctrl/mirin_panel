import axios, { AxiosError } from "axios";
import {
  ILoginFailedPayload,
  ILoginPayload,
  ILoginSucceededPayload,
} from "../users";

export const loginAPI = (
  payload: ILoginPayload
): Promise<ILoginSucceededPayload | ILoginFailedPayload> => {
  const url = "/api/auth/login";
  return axios
    .post(url, payload)
    .then((res) => res.data)
    .catch((err: AxiosError) => err);
};
