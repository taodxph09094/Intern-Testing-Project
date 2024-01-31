import { Button, Card, Space, TableProps, Table, Form, Input, Popconfirm } from "antd";
import { useState } from "react";
import {  ProductType } from "../Menu/dto/index";
import AddProductType from "./AddProductType";
import EditProductType from "./EditPructType";
import { useDispatch } from "react-redux";
import { showNotification } from "../../stores/reducers/notificationReducer";

const ProductType = () => {
  const dispatch = useDispatch()
  const [modalType, setModalType] = useState(false)
  const [modalEditType, setModalEditType] = useState(false)
  const [data, setData] = useState<ProductType[]>([
    {
      _id:'1',
      name:'cuong',
      status: true,
    },
    {
      _id:'2',
      name: "Sample Product 2",
      status: false,
    },
  ]);

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
          title={`Are you sure to change the status to ${record.status ? "INACTIVE" : "ACTIVE"}?`}
          onConfirm={() => handleStatusChange(record)}
          okText="Yes"
          cancelText="No"
          okButtonProps={{ style: { background: 'blue', color: 'white' } }}
          
        >
          <Button style={{ color: record.status ? 'Blue' : 'red' }}>{record.status ? "ACTIVE" : "INACTIVE"}</Button>
        </Popconfirm>
       
      ),
      
    },
  ];
  const handleOpenProType = () => {
    setModalType(true)
  }
  const handleOpenEdit = () => {
    setModalEditType(true)
  }
  const handleStatusChange = (record: ProductType) => {
    const newStatus = !record.status;
    setData((prevData) =>
      prevData.map((item) =>
        item._id === record._id ? { ...item, status: newStatus } : item
      )
    );

   dispatch(showNotification({message:'thanh cong', type:'success'}))
  };
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
            <Input placeholder="search" style={{width:500}} />
            <Button>Search</Button>
          </div>
        </Card>
        <Card
          title="Produc Type"
          style={{ marginTop: 20 }}
          extra={
            <Space>
              <Button onClick={handleOpenEdit}>Edit</Button>
              <Button onClick={handleOpenProType}>Add</Button>
            </Space>
          }
        >
          <Table columns={columns} dataSource={data} />
        </Card>
      </Form>
      <AddProductType
      modalType={modalType}
      setModalType={setModalType}
      />
      <EditProductType
      modalEditType={modalEditType}
      setModalEditType={setModalEditType}
      />
    </div>
  );
};

export default ProductType;
