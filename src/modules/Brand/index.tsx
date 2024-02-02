import  { useEffect, useState } from 'react'
import { Button, Card, Popconfirm, Space, Table, TableProps } from 'antd';
import { Brand } from '../Menu/dto';
import AddBrand from './AddBrand';
import EditBrand from './EditBrand';
import { getListBrand } from '../Menu/api';
import { useDispatch } from 'react-redux';
import { showNotification } from '../../stores/reducers/notificationReducer';
 

const Brand = () => {
    const [modalBrand, setModalBrand] = useState(false)
    const [modalEditBrand, setModalEditBrand] = useState(false)
    const [data, setData] = useState<Brand[] | undefined>([])
    const [paramSearch, setParamSearch] = useState({})
    const [selectedRecordId, setSelectedRecordId] = useState<string | null>(null)
    const [upadteData, setUpdateData] = useState<Brand | null>(null)
    const dispatch = useDispatch()
    
    
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
        {
          title:'Action',
          key:'action',
          render:(_, record) =>(
            <Space>
              <Button onClick={() =>{setUpdateData(record);handleOpenEdit(record._id)}}>Edit</Button>
            </Space>
          )
          
        }
     ]
  const handleOpenBrand = () => {
    setModalBrand(true)
  }

  const handleStatusChange = (record: Brand) => {
    const newStatus = !record.status;
    setData((prevData) =>
      prevData.map((item) =>
        item._id === record._id ? { ...item, status: newStatus } : item
      )
    );
  
    dispatch(showNotification({ message: 'Thành công', type: 'success' }));
  };
  
useEffect(() => {
  
  const getAllBrand = async () => {
    try{
      const Response =await getListBrand();
      console.log(Response,'oqwp200-')
      if(Response.status){
        setData(Response.result.data)
      }else{
        dispatch(showNotification({message:Response.message, type:"error"}))
      }
    }catch(error) {
      console.log(error)
    }
    
  }
  if(paramSearch){

    getAllBrand()
  }
},[paramSearch])
const handleOpenEdit = (recordID: string) =>{
  setModalEditBrand(true),
  setSelectedRecordId(recordID)


}
  return (
    <div>
      <Card
      title='Menu brand'
      extra={
        <Space>
            <Button onClick={handleOpenBrand}>Add</Button>
        </Space>
            }
      >
    
    <Table columns={columns} dataSource={data} />
      </Card>
      <AddBrand
      modalBrand={modalBrand}
      setModalBrand={setModalBrand}
      setParamSearch={setParamSearch}
      />

      <EditBrand
      modalEditBrand={modalEditBrand}
      setModalEditBrand={setModalEditBrand}
      setSelectedRecordId={setSelectedRecordId}
      upadteData={upadteData}
      selectedRecordId={selectedRecordId}
      setParamSearch={setParamSearch}

      />
    </div>
  )
}

export default Brand
