import React from "react";
import { Button, Col, Form, Input, Modal, Row, Select } from "antd";

type Props = {
  setModalEditBrand: React.Dispatch<React.SetStateAction<boolean>>;
  modalEditBrand: boolean;
};
const EditBrand = (props: Props) => {
  const { setModalEditBrand, modalEditBrand } = props;
  const [from] = Form.useForm();
  const handleCloseBr = () => {
    setModalEditBrand(false);
  };
  return (
    <div>
      <Modal
        title="Update Brand - Id"
        open={modalEditBrand}
        onCancel={handleCloseBr}
        footer={null}
        style={{ textAlign: "center" }}
        width={700}
      >
        <Form layout="vertical" style={{ margin: "10px 0 20px  0" }}>
         
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
        <Button onClick={handleCloseBr}>Cancel</Button>
        <Button onClick={() => from.submit()} style={{ marginLeft: 20 }}>
          Ok
        </Button>
      </Modal>
    </div>
  );
};

export default EditBrand;
