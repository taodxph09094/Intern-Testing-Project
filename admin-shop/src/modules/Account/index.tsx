import { Button, Card, Space, Table, TableProps } from 'antd'
import  { useEffect, useState } from 'react'
import { MenuUser } from '../Menu/dto';
import { getDanhSachTaiKhoan } from '../Menu/api';
import { showNotification } from '../../stores/reducers/notificationReducer';
import { useDispatch } from 'react-redux';

const AccountList = () => {

  const [dataUser, setDataUser] = useState<MenuUser[]>([]);
  const dispatch = useDispatch();

    const columns: TableProps<MenuUser>["columns"] = [
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "Email",
          dataIndex: "email",
          key: "email",
        },
        {
          title: "Password",
          dataIndex: "password",
          key: "password",
        },
        {
          title: "Phone",
          dataIndex: "phone",
          key: "phone",
        },
        {
          title: "Address",
          dataIndex: "address",
          key: "address",
        },
        {
          title: "Action",
          key: "action",
          render: (_, record) => (
            <Space size={"middle"}>
              <Button>Delete</Button>
            </Space>
          ),
        },
      ];
      useEffect(() => {
        const getListTaiKhoa = async () => {
          try {
            const res = await getDanhSachTaiKhoan();
            console.log(res, "cuong");
            if (res.status) {
              console.log("taikhoan", res.result.data); 
              setDataUser(res?.result?.data);
            } else {
              dispatch(showNotification({ message: res.message, type: "error" }));
            }
          } catch (error) {}
        };
        getListTaiKhoa();
      }, []);
  return (
    <div> <Card
    title="Danh sach Tai Khoan"
    extra={
      <Space size={"middle"}>
        <Button>Them moi</Button>
      </Space>
    }
  >
    <Table columns={columns} dataSource={dataUser} />
  </Card></div>
  )
}

export default AccountList