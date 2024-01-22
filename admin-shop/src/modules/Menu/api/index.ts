import { endpoints, settings } from "../../../api/endpoint";
import { request } from "../../../api/request";
import { PageData } from "../../../interfaces";
import { AddData, Menu } from "../dto";

export const getDanhSachMenu = () =>
  request<Menu[]>(
    "get",
    `${settings.API}/${endpoints.menu.getList}`
  );

  export const getChinhSuaMenu = (id: string, body: AddData) =>
  request<AddData>(
    "put",
    `${settings.API}/${endpoints.menu.updateMenu}/${id}`, body
  );

  export const getXoaMenu = (id: string) =>
  request<PageData<Menu>>(
    "delete",
    `${settings.API}/${endpoints.menu.deleteMenu}/${id}`
  );
  export const getThemMenu = (body: AddData) =>
    request<AddData>(
      "post",
      `${settings.API}/${endpoints.menu.addMenu}`,body
    );
  export const getDanhSachTaiKhoan = () =>
  request<PageData<Menu>>(
    "get",
    `${settings.API}/${endpoints.userList.getlist}`
  );
  // export const getId = (id: string) =>
  // request<AddData>(
  //   "get",
  //   `${settings.API}/${endpoints.menu.valuesMeny}/${id}`,
  // );
