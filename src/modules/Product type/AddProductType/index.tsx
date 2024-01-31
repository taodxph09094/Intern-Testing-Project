import React from "react";
import { Button, Col, Form, Input, Modal, Row, Select } from "antd";

type Props = {
  modalType: boolean;
  setModalType: React.Dispatch<React.SetStateAction<boolean>>;
};
const AddProductType = (props: Props) => {
  const { modalType, setModalType } = props;
  const[from] = Form.useForm()
  const handleClose = () => {
    setModalType(false);
  };
  return (
    <div>
      <Modal
        title="Add Product Type"
        open={modalType}
        onCancel={handleClose}
        style={{textAlign:'center'}}
        footer={null}
      >
       
        <Form layout="vertical" style={{marginTop:20}}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={13}>
              <Form.Item label='Name' name='name'>
                <Input placeholder="name" />
              </Form.Item>
            </Col>
            <Col span={11}>
              <Form.Item label='Status' name='status'>
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
