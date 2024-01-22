export interface Menu {
  _id: string;
  name: string;
  path: string;
  icon: string;
  isChildren: boolean;
  status: boolean;
  children: Menu[];
}
export interface MenuUser{
  _id: string;
  name: string;
  email: string;
  password:string;
  phone:string;
  address: string;

}
export interface AddData{
  _id?: string;
  name: string;
  path: string;
  icon: string;
  status?: boolean;
  isChildren?: boolean;
  children?:AddData;
}
