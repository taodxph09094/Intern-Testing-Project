import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Dropdown, MenuProps, Row } from "antd";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../api/components/userApi";
import { clearUser } from "../../stores/reducers/userReducer";
import { showNotification } from "../../stores/reducers/notificationReducer";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const userInfo = useSelector((state: any) => state.user.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = async () => {
    const response = await logoutUser();
    if (response.status) {
      localStorage.removeItem("user_token");
      dispatch(clearUser());
      dispatch(
        showNotification({ message: response.message, type: "success" })
      );
      navigate("/login");
    } else {
      dispatch(showNotification({ message: response.message, type: "error" }));
    }
  };
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Thong tin
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Doi thong tin
        </a>
      ),
    },
    {
      key: "3",
      label: <Button onClick={logout}>Đăng xuất</Button>,
    },
  ];
  return (
    <div className="header">
      <div>
        <h2>Intern Shop</h2>
      </div>

      <Dropdown menu={{ items }} placement="bottom">
        <div className="header__user">
          {/* <Button>bottomRight</Button> */}
          <Avatar size={40} src={userInfo?.avatar?.url} />
          <p>{userInfo?.name}</p>
        </div>
      </Dropdown>
    </div>
  );
};

export default Header;
