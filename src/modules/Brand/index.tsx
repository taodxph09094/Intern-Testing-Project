import  { useState } from 'react'
import { Button, Card,  Popconfirm,  Space,  Table,  TableProps } from 'antd';
import { Brand } from '../Menu/dto';
import AddBrand from './AddBrand';
import EditBrand from './EditBrand';
import { useDispatch } from 'react-redux';
import { showNotification } from '../../stores/reducers/notificationReducer';

const Brand = () => {
    // const [data, setData] = useState()
    const [modalBrand, setModalBrand] = useState(false)
    const dispatch = useDispatch()
    const [modalEditBrand, setModalEditBrand] = useState(false)
    const [data, setData] = useState<Brand[]>([
      {
        _id:'1',
        name: "Sample Product 1",
        status: true,
        address:'hanoi',
        phone:'0987654321'
      },
      {
        _id:'2',
        name: "Sample Product 2",
        address:'hcm',
        phone:'0986826189',
        status: false,
      },
    ]);

     const columns : TableProps<Brand> ["columns"]= [
        {
            title:'Name',
            dataIndex:'name',
            key:'name',
        },
        {
            title:'Address',
            dataIndex:'address',
            key:'address',
        },
        {
            title:'Phone',
            dataIndex:'phone',
            key:'phone'
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
     ]
     console.log(setData)
  const handleOpenBrand = () => {
    setModalBrand(true)
  }
  const handleOpenEditBrand = () => {
    setModalEditBrand(true)

  }
  const handleStatusChange = (record: Brand) => {
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
      <Card
      title='Menu brand'
      extra={
        <Space>
            <Button onClick={handleOpenBrand}>Add</Button>
            <Button onClick={handleOpenEditBrand}>Edit</Button>
        </Space>
            }
      >
    
    <Table columns={columns} dataSource={data} />
      </Card>
      <AddBrand
      modalBrand={modalBrand}
      setModalBrand={setModalBrand}
      />

      <EditBrand
      modalEditBrand={modalEditBrand}
      setModalEditBrand={setModalEditBrand}
      />
    </div>
  )
}

export default Brand
