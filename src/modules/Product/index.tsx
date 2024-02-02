import { Button, Card, Form, Input,  Popconfirm, Space, Table, TableProps,  } from 'antd';
import React, { useEffect, useState } from "react";
import { Product } from "../Menu/dto/index";
import AddProduct from "./AddProduct/indev";
import EditProduct from './EditProduct/index';
import { showNotification } from '../../stores/reducers/notificationReducer';
import { useDispatch } from 'react-redux';
import { getProduct } from '../Menu/api';


const ProductPage = () => {
  // const [data, setData] = useState();
  const dispatch = useDispatch()
  const [modalAdd, setModalAdd] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [data, setData] = useState<Product>()
  const [paramSearch, setParamSearch] = useState({})
 
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
    {
      title:'Action',
      key:'action',
      render: (_, record) => (
        <Space>
          <Button onClick={() => {handleOpenEdit(record._id)}}>Edit</Button>
        </Space>
      )
    }
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

useEffect(() => {
  const getListProduct = async() =>{
    try{
      const Response =await getProduct()
      if(Response.status){
        setData(Response.result.data)
      }else{
        dispatch(showNotification({message:Response.message, type:'error'}))
      }
    }catch(error){
      console.log(error)
    }
  }
  if(paramSearch){
    getListProduct()
  }
},[paramSearch])
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
