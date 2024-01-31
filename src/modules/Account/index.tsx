import {
  Button,
  Card,
  Col,
  Form,
  Modal,
  Row,
  Select,
  Space,
  Table,
  TableProps,
} from "antd";
import { useEffect, useMemo, useState } from "react";
import { Account } from "../Menu/dto";
import { showNotification } from "../../stores/reducers/notificationReducer";
import { useDispatch } from "react-redux";
import { getListAccount, getXoaAccount } from "../Menu/api";
import { DeleteOutlined } from "@ant-design/icons";


const AccountList = () => {
  const [data, setData] = useState<Account[]>([]);
  const dispatch = useDispatch();
  const [paramSearch, setParamSearch] = useState({});

  const [modalDec, setModalDec] = useState(false);
  const columns: TableProps<Account>["columns"] = [
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
      title: "Role",
      key: "Role",
      dataIndex: "Role",
      
      render: (_,record) => (
        <Space>
          <Button  onClick={() => handleOpenDec(record._id)}>Role management</Button>
        </Space>
      ),
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
          <DeleteOutlined
            style={{ marginLeft: 12 }}
            onClick={() => handleDeletAcc(record._id)}
          />
        </Space>
      ),
    },
  ];
  useEffect(() => {
    const getListTaiKhoa = async () => {
      try {
        const Response = await getListAccount();
        // console.log(Response.result, "cuong1");
        if (Response.status) {
          setData(Response.result.data);
          console.log(Response.result, "haiis");
        } else {
          dispatch(
            showNotification({ message: Response.message, type: "error" })
          );
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (paramSearch) {
      getListTaiKhoa();
    }
  }, [paramSearch]);

  const handleDeletAcc = async (_id: string) => {
    try {
      const respone = await getXoaAccount(_id);
      console.log(respone,'comg')
      if (respone.status.valueOf()) {
        dispatch(
          showNotification({ message: respone.message, type: "success" })
        );
          console.log(respone.status.valueOf,'cpowe'),

        setParamSearch({ name: 1 });
        console.log(respone.status, "-000");
      } else {
        dispatch(showNotification({ message: respone.message, type: "error" }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenDec = (_id: string) => {
    console.log(_id)
    setModalDec(true);
  };
  const handleCloseDec = () => {
    setModalDec(false);
  };
  
  const viewTable = useMemo(() => {
    return <Table columns={columns} dataSource={data} />;
  }, [data]);
  return (
    <div>
      {" "}
      <Card title="Danh sach Tai Khoan">{viewTable}</Card>
      <Modal
        width={200}
        title="Decentralization"
        open={modalDec}
        onCancel={handleCloseDec}
        footer={null}
        style={{textAlign:'center'}}
      >
        <Form style={{textAlign:'center',marginTop:30}}>
          <Form.Item>
            <Row>
            <Col span={24}>
            <Select
              defaultValue={"Admin"}
              options={[
                { value: "user", label: "User" },
                { value: "admin", label: "Admin" },
              ]}
            />
            </Col>
            </Row>
          </Form.Item>
        </Form>
        <Button style={{marginRight:10}} onClick={() => handleCloseDec}>Huy</Button>
        <Button>Ok</Button>
      </Modal>
    </div>
  );
};

export default AccountList;
