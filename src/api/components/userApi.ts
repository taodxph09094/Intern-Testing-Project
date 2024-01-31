import { Login, ResultUser } from "../../interfaces/user";
import { endpoints, settings } from "../endpoint";
import { request } from "../request";
import { requestSSO } from "../requestSSO";

export const loginUser = (body: Login) =>
  requestSSO<ResultUser>("post", `${settings.API}/${endpoints.user.login}`, body);

export const logoutUser = () =>
  request<ResultUser>("get", `${settings.API}/${endpoints.user.logout}`);
