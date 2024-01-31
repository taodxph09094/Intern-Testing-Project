import { Button, Col, Form, Input, Modal, Row } from "antd";
import React from "react";

type Props = {
  setModalBrand: React.Dispatch<React.SetStateAction<boolean>>;
  modalBrand: boolean;
};
const AddBrand = (props: Props) => {
    const[form] = Form.useForm()
  const { setModalBrand, modalBrand } = props;

  const handleClose = () => {
    setModalBrand(false);
    form.resetFields()
  };
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
        <Form layout="vertical" style={{ margin: '50px 0 20px  0' }}>
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
