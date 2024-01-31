import { endpoints, settings } from "../../../api/endpoint";
import { request } from "../../../api/request";
import { PageData } from "../../../interfaces";
import { Account, AddAccount, AddData, Menu } from "../dto";

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
export const getListAccount = () =>
  request<Account[]>(
    "get",
    `${settings.API}/${endpoints.Account.getlist}`
  )
export const getThemAccount = (body: AddAccount) =>
    request<AddAccount>(
      "post",
      `${settings.API}/${endpoints.Account.getUpdate}`,body
    );
export const getXoaAccount = (id: string) =>
    request<Account>(
      "delete",
      `${settings.API}/${endpoints.Account.getdelete}/${id}`
    );    