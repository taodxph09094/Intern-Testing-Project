import { Button, Col, Form, Input, Modal, Row } from "antd";
import React from "react";
import { postBrand } from "../../Menu/api";
import { AddBrand } from "../../Menu/dto";
import { useDispatch } from "react-redux";
import { showNotification } from "../../../stores/reducers/notificationReducer";

type Props = {
  setParamSearch: React.Dispatch<React.SetStateAction<object>>
  setModalBrand: React.Dispatch<React.SetStateAction<boolean>>;
  modalBrand: boolean;
};
const AddBrand = (props: Props) => {
    const[form] = Form.useForm()
  const { setModalBrand, modalBrand,setParamSearch } = props;
  const dispatch = useDispatch()

  const handleClose = () => {
    setModalBrand(false);
    form.resetFields()
  };
  const onSubmit = async (values: AddBrand) => {
    try{
      await form.validateFields();
      const Response = await postBrand(values);
      if(Response.status){
        dispatch(showNotification({message:Response.message, type:'success'}))
        setParamSearch({name:1})
        handleClose()
      }else{
        dispatch(showNotification({message:Response.message, type:'error'}))

      }
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div>
      <Modal
        title="Add Brand"
        open={modalBrand}
        onCancel={handleClose}
        width={800}
        footer={null}
        style={{ textAlign: "center" }}
      >
        <Form onFinish={onSubmit} layout="vertical" form={form} style={{ margin: '50px 0 20px  0' }}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={7}>
              <Form.Item label="Name" name="name">
                <Input />
              </Form.Item>
            </Col>
            <Col span={10}>
              <Form.Item label="Address" name="address">
                <Input />
              </Form.Item>
            </Col>
            <Col span={7}>
              <Form.Item label="Phone" name="phone">
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={() => form.submit()} style={{marginLeft:20}}>Ok</Button>
      </Modal>
    </div>
  );
};

export default AddBrand;
