import {
  Button,
  Card,
  Space,
  TableProps,
  Table,
  Form,
  Input,
  Popconfirm,
} from "antd";
import { useEffect, useState } from "react";
import { ProductType } from "../Menu/dto/index";
import AddProductType from "./AddProductType";
import EditProductType from "./EditPructType";
import { useDispatch } from "react-redux";
import { showNotification } from "../../stores/reducers/notificationReducer";
import { deleteProductType, getListProductType } from "../Menu/api";

const ProductType = () => {
  const dispatch = useDispatch();
  const [modalType, setModalType] = useState(false);
  const [modalEditType, setModalEditType] = useState(false);
  const [data, setData] = useState<ProductType[] | undefined>([]);
  const [paramSearch, setparamSearch] = useState({});
  const [updateData,setUpdateData] =useState<ProductType | null >(null)
  const [selectedRecordId, setSelectedRecordId] = useState<string | null>(null)

  const columns: TableProps<ProductType>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (_, record) => (
        <Popconfirm
          title={`Are you sure to change the status to ${
            record.status ? "INACTIVE" : "ACTIVE"
          }?`}
          onConfirm={() => handleStatusChange(record)}
          okText="Yes"
          cancelText="No"
          okButtonProps={{ style: { background: "blue", color: "white" } }}
        >
          <Button style={{ color: record.status ? "Blue" : "red" }}>
            {record.status ? "ACTIVE" : "INACTIVE"}
          </Button>
        </Popconfirm>
      ),
    },
    {
      title:'Action',
      key:'action',
      render:(_, record) =>(
        <Space>
              <Button onClick={() =>{setUpdateData(record);handleOpenEdit(record._id)}}>Edit</Button>
              <Button onClick={() => hanleDelete(record._id)} >Delete</Button>
        </Space>
      )
    }
  ];
  const handleOpenProType = () => {
    setModalType(true);
  };
  const handleOpenEdit = (recordId : string) => {
    setModalEditType(true);
    setSelectedRecordId(recordId)

  };
  const handleStatusChange = (record: ProductType) => {
    const newStatus = !record.status;
    setData((prevData) =>
      prevData.map((item) =>
        item._id === record._id ? { ...item, status: newStatus } : item
      )
    );

    dispatch(showNotification({ message: "thanh cong", type: "success" }));
  };
  useEffect(() => {
    const getAllProductType = async () => {
      try {
        const Response = await getListProductType();
        if (Response.status) {
          setData(Response.result.data);
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
      getAllProductType();
    }
  }, [paramSearch]);

  const hanleDelete = async(_id: string) =>{
    try{
      const Response = await deleteProductType(_id)
    if(Response.status){
      dispatch(showNotification({message:Response.message, type:"success"}))
      setparamSearch({name: 1})
    }else{
      dispatch(showNotification({message:Response.message, type:"error"}))

    }
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div>
      <Form>
        <Card>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Input placeholder="search" style={{ width: 500 }} />
            <Button>Search</Button>
          </div>
        </Card>
        <Card
          title="Produc Type"
          style={{ marginTop: 20 }}
          extra={
            <Space>
              <Button onClick={handleOpenProType}>Add</Button>
            </Space>
          }
        >
          <Table columns={columns} dataSource={data} />
        </Card>
      </Form>
      <AddProductType  modalType={modalType} setModalType={setModalType} setparamSearch={setparamSearch} />
      <EditProductType
        modalEditType={modalEditType}
        setModalEditType={setModalEditType}
        updateData={updateData}
        selectedRecordId={selectedRecordId}
        setparamSearch={setparamSearch}
      />
    </div>
  );
};

export default ProductType;
