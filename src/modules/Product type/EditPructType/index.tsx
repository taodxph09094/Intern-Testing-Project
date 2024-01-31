import React from "react";
import { Button, Col, Form, Input, Modal, Row, Select } from "antd";

type Props = {
    modalEditType: boolean;
  setModalEditType: React.Dispatch<React.SetStateAction<boolean>>
};
const EditProductType = (props: Props) => {
  const { modalEditType, setModalEditType } = props;
  const[from] = Form.useForm()
  const handleClose = () => {
    setModalEditType(false);
  };
  return (
    <div>
      <Modal
        title="Update Category - Id"
        open={modalEditType}
        onCancel={handleClose}
        style={{textAlign:'center'}}
        footer={null}
      >
        <Form layout="vertical" style={{marginTop:20}}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={12}>
              <Form.Item label='Name' name='name'>
                <Input placeholder="name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label='Status' name='status'>
                <Input placeholder="name" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={() => from.submit()}>OK</Button>
      </Modal>
    </div>
  );
};

export default EditProductType;
