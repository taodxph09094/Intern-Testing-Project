import { Button, Card, Form, Input, Modal, Popconfirm, Space, Table, TableProps,  } from 'antd';
import React, { useState } from "react";
import { Product } from "../Menu/dto/index";
import AddProduct from "./AddProduct/indev";
import EditProduct from './EditProduct/index';
import confirm from "antd/es/modal/confirm";
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { showNotification } from '../../stores/reducers/notificationReducer';
import { useDispatch } from 'react-redux';


const ProductPage = () => {
  // const [data, setData] = useState();
  const dispatch = useDispatch()
  const [modalAdd, setModalAdd] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [data, setData] = useState<Product[]>([
    {
      _id:'1',
      image: "sample-image.jpg",
      code: "ABC123",
      name: "Sample Product 1",
      type: "Type1",
      brand: "Brand1",
      price: 20.0,
      size: "M",
      quantity: 10,
      status: true,
    },
    {
      _id:'2',
      image: "sample-image2.jpg",
      code: "DEF456",
      name: "Sample Product 2",
      type: "Type2",
      brand: "Brand2",
      price: 30.0,
      size: "L",
      quantity: 15,
      status: false,
    },
  ]);
  const columns: TableProps<Product>["columns"] = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
    },
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
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
  const handleOpenAdd = () => {
    setModalAdd(true);
  };
  const handleOpenEdit = () => {
    setModalEdit(true)
  }
  
  const handleStatusChange = (record: Product) => {
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
          <Form.Item label="Name">
            <Input />
          </Form.Item>
        </Card>
        <Card
          title="Menu Product"
          extra={
            <Space>
              <Button onClick={handleOpenAdd}>Add</Button>
              <Button onClick={handleOpenEdit}>Edit</Button>
            </Space>
          }
        >
          <Table columns={columns} dataSource={data} />
        </Card>
      </Form>
      <AddProduct modalAdd={modalAdd} setModalAdd={setModalAdd} />
      <EditProduct modalEdit={modalEdit} setModalEdit={setModalEdit}  />
     
    </div>
  );
};

export default ProductPage;
