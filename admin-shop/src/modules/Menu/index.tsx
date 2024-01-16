import { Space, Table, TableProps, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { Menu } from "./dto";
import { getDanhSachMenu } from "./api";
import { useDispatch } from "react-redux";
import { showNotification } from "../../stores/reducers/notificationReducer";

const MenuPage: React.FC = () => {
  const [data, setData] = useState<Menu[]>([]);
  const dispatch = useDispatch();
  const columns: TableProps<Menu>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Path",
      dataIndex: "path",
      key: "path",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Icon",
      dataIndex: "icon",
      key: "icon",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (_, { status }) => {
        let color = status ? "green" : "volcano";
        let show = status ? "ACTIVE" : "INACTIVE";
        return <Tag color={color}>{show}</Tag>;
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  useEffect(() => {
    const getListMenu = async() => {
      try{
        const response = await getDanhSachMenu();
        console.log(response,'addn')
        if(response.status){

        }else{
          dispatch(
            showNotification({ message: response.message, type: "error" })
          );
        }
      }catch(error){
        
      }
    }
    getListMenu();
  },[])
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default MenuPage;
