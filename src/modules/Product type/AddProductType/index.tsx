import React from "react";
import { Button, Col, Form, Input, Modal, Row} from "antd";
import { AddProductType} from "../../Menu/dto";
import { postProductType } from '../../Menu/api/index';
import { useDispatch } from "react-redux";
import { showNotification } from "../../../stores/reducers/notificationReducer";

type Props = {
  modalType: boolean;
  setModalType: React.Dispatch<React.SetStateAction<boolean>>;
  setparamSearch: React.Dispatch<React.SetStateAction<object>>
};
const AddProductType = (props: Props) => {
  const { modalType, setModalType,setparamSearch } = props;
  const[from] = Form.useForm()
  const dispatch =useDispatch()
  const handleClose = () => {
    setModalType(false);
  };
  const onsubmit = async(values: AddProductType) =>{
    try{
      await from.validateFields()
      const Response = await postProductType(values)
      if(Response.status){
        dispatch(showNotification({ message: Response.message, type: "success" }));
        handleClose();
        setparamSearch({name: 1})
      }
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div>
      <Modal
        title="Add Product Type"
        open={modalType}
        onCancel={handleClose}
        style={{textAlign:'center'}}
        footer={null}
      >
       
        <Form onFinish={onsubmit} form={from} layout="vertical" style={{marginTop:20}}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={24}>
              <Form.Item label='Name' name='name'>
                <Input placeholder="name" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <Button style={{marginRight:20}} onClick={handleClose}>Cancel</Button>
        <Button  onClick={() => from.submit()}>OK</Button>
      </Modal>
    </div>
  );
};

export default AddProductType;