import { MenuOutlined } from "@ant-design/icons";
import AccountList from "../modules/Account";
import Brand from "../modules/Brand";
import ProductType from "../modules/Product type";
import Categories from "../modules/Categories";

export const routes = [
  {
    key: "1",
    path: "/menu",
    label: "Menu",
    icon: <MenuOutlined />,
  },
  {
    key: "2",
    path: "/products",
    label: "Product",
    icon: <MenuOutlined />,
  },
  {
    key: "3",
    path: "/setting",
    label: "Cau hinh",
    icon: <MenuOutlined />,
  },
   {
    key: "4",
    path: "/account",
    label: "Account",
    icon: <AccountList />,
  },
  {
    key: "5",
    path: "/brand",
    label: "Brand",
    icon: <Brand />,
  },
  {
    key: "6",
    path: "/productType",
    label: "ProductType",
    icon: <ProductType />,
  },
  {
    key: "7",
    path: "/categories",
    label: "Categories",
    icon: <Categories />,
  },


];
