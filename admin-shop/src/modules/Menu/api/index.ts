import { endpoints, settings } from "../../../api/endpoint";
import { request } from "../../../api/request";
import { PageData } from "../../../interfaces";
import { Menu } from "../dto";

export const getDanhSachMenu = () =>
  request<PageData<Menu>>(
    "get",
    `${settings.API}/${endpoints.menu.getList}`
  );