import { Login, ResultUser } from "../../interfaces/user";
import { endpoints, settings } from "../endpoint";
import { request } from "../request";

export const loginUser = (body: Login) => {
  request<ResultUser>("post", `${settings.API}/${endpoints.user.login}`, body);
};
