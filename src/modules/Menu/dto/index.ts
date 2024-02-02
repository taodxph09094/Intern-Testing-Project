export interface Menu {
  _id: string;
  name: string;
  path: string;
  icon: string;
  isChildren: boolean;
  status: boolean;
  children: Menu[
  ];
}
export interface AddData {
  _id?: string;
  name: string;
  path: string;
  icon: string;
  status?: boolean;
  isChildren?: boolean;
  children?: AddData;
}
export interface Brand {
  _id:string,
  name:string,
  address:string,
  phone:string,
  status: boolean,
}
export interface AddBrand {
  _id?:string,
  name:string,
  address:string,
  phone:string,
  status?: boolean,
} 

export interface Account {
  _id: string;
  name: string;
  email: string;
  role: string,
  phone: string;
  address: string;
  
}
export interface AddAccount{
  name:string,
  email:string,
  password:string,
  phone:string,
  address:string,
  
  
}
export interface ProductType{
  _id:string,
  name:string,
  status: boolean,
}
export interface AddProductType{
  _id:string,
  name:string,
  status: boolean,
}

export interface Product {
  _id: string;
  image: string;
  code: string;
  name: string;
  type: string;
  brand: string;
  price:   number;
  size: string;
  quantity: number;
  status: boolean;
}
export interface Categories{
  _id:string,
  name:string,
  status: boolean,

}
export interface AddCategories{
  _id:string,
  name:string,
  status: boolean,
}
