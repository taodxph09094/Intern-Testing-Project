import { MenuOutlined } from "@ant-design/icons";
import AccountList from "../modules/Account";

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
  }

];
