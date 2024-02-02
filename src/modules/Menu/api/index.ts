import { endpoints, settings } from "../../../api/endpoint";
import { request } from "../../../api/request";
import { PageData } from "../../../interfaces";
import { Account, AddAccount, AddBrand, AddData, Brand, Categories, Menu, Product, ProductType } from "../dto";

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

export const getListBrand = () => 
    request<Brand[]>(
    "get",
    `${settings.API}/${endpoints.Brand.getlist}`
    )
export const postBrand = ( body: AddBrand) => 
    request<AddBrand>(
      "post",
      `${settings.API}/${endpoints.Brand.postBrand}`,body
    )
export const putBrand = (id:string , body:AddBrand) =>
    request<AddBrand>(
      "put",
      `${settings.API}/${endpoints.Brand.putBrand}/${id}`,body
    )


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

      
export const getListProductType = () =>
    request<ProductType[]>(
      "get",
      `${settings.API}/${endpoints.ProductType.getList}`
    )
export const postProductType = (body:ProductType) =>
    request<ProductType>(
      "post",
      `${settings.API}/${endpoints.ProductType.postProductType}`,body
    )
export const putProductType = (id: string, body: ProductType) =>
    request<ProductType>(
      "put",
      `${settings.API}/${endpoints.ProductType.updateProductType}/${id}`,body
    )
export const deleteProductType = (id: string) =>
    request<ProductType>(
      "delete",
      `${settings.API}/${endpoints.ProductType.deleteProductType}/${id}`
    );    

export const getProduct = () => 
    request<Product>(
      'get',
      `${settings.API}/${endpoints.product.getListProduct}`
    )

export const getListCategories = () =>
    request<Categories[]>(
      "get",
      `${settings.API}/${endpoints.Categories.getList}`
    )

export const postCategories = (body:Categories) =>
    request<Categories>(
      "post",
      `${settings.API}/${endpoints.Categories.postCategories}`,body
    )
export const putCategories = (id: string, body: Categories) =>
    request<Categories>(
      "put",
      `${settings.API}/${endpoints.Categories.updateCategories}/${id}`,body
    )

export const deleteCategories = (id: string) =>
    request<Categories>(
      "delete",
      `${settings.API}/${endpoints.Categories.deleteCategories}/${id}`
    );    
