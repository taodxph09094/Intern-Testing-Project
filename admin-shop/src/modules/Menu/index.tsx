import { Button, Card, Form, Input, Space, Table, TableProps, Tag } from "antd";
import React, { useEffect, useMemo, useState } from "react";
// import { Menu  } from "./dto";
import { Menu } from "./dto";
import { getDanhSachMenu, getXoaMenu } from "./api";
import { useDispatch } from "react-redux";
import { showNotification } from "../../stores/reducers/notificationReducer";
import AddData from "./getAddData";
import EditData from "./getEditData";

const MenuPage: React.FC = () => {
  const [data, setData] = useState<Menu[]>([]);
  const [isModal, setIsModal] = useState(false);
  const [isModalEdit, setIsModalEdit] = useState(false);
  const dispatch = useDispatch();
  const [paramSearch, setParamSearch] = useState({});
  const [selectedRecordId, setSelectedRecordId] = useState<string | null>(null);
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
        const color = status ? "green" : "volcano";
        const show = status ? "ACTIVE" : "INACTIVE";
        return <Tag color={color}>{show}</Tag>;
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => handleEdit(record._id)}>Edit</Button>
          <Button onClick={() => handleDelete(record._id)}>Delete</Button>
        </Space>
      ),
    },
  ];

  // useEffect(() => {
  //   const getListMenu = async () => {
  //     try {
  //       const response = await getDanhSachMenu();
  //       if (response.status) {
  //         setData(response.result);
  //       } else {
  //         dispatch(
  //           showNotification({ message: response.message, type: "error" })
  //         );
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   if (paramSearch) {
  //     getListMenu();
  //   }
  // }, [paramSearch]);

  const handleDelete = async (_id: string) => {
    try {
      const res = await getXoaMenu(_id);
      console.log(res, "cuong");
      if (res.status) {
        dispatch(showNotification({ message: res.message, type: "success" }));
      } else {
        dispatch(showNotification({ message: res.message, type: "error" }));
      }
    } catch (error) {
      console.error("An error occurred while deleting menu:", error);
    }
  };
  const handleOpen = () => {
    setIsModal(true);
  };
  const handleEdit = (recordId: string) => {
    setSelectedRecordId(recordId);
    setIsModalEdit(true);
  };

  const viewTable = useMemo(() => {
    return <Table columns={columns} dataSource={data} />;
  }, [data]);
  return (
    <div>
      <Form>
        <Card style={{ marginBottom: 10 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Input style={{ width: 500 }} placeholder="search" />
            <Button>Search</Button>
          </div>
        </Card>
        <Card
          title="Danh sach menu"
          extra={
            <Space size="middle">
              <Button onClick={handleOpen}>Them moi</Button>
            </Space>
          }
        >
          {viewTable}
        </Card>
      </Form>

      {/* <AddData
        isModal={isModal}
        setIsModal={setIsModal}
        setParamSearch={setParamSearch}
      />
      <EditData
        setParamSearch={setParamSearch}
        isModalEdit={isModalEdit}
        setIsModalEdit={setIsModalEdit}
        selectedRecordId={selectedRecordId}
        
      /> */}
    </div>
  );
};

export default MenuPage;
