import React from "react";
import { Button, Col, Form, Input, Modal, Row, Select, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";

type Props = {
  setModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
  modalEdit: boolean;
};
const EditProduct = (props: Props) => {
  const { modalEdit, setModalEdit } = props;
  const [from] = Form.useForm();
  const handleClosePro = () => {
    setModalEdit(false);
  };
  return (
    <div>
      <Modal
        title="Update Product - Id"
        open={modalEdit}
        width={1200}
        onCancel={handleClosePro}
        style={{ textAlign: "center" }}
        footer={null}
      >
        <Form layout="vertical" style={{ marginTop: 50 }}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={10}>
              <Form.Item label="Code" name="code">
                <Input disabled />
              </Form.Item>
            </Col>
            <Col span={9}>
              <Form.Item label="Brand" name="brand">
                <Select
                  defaultValue={"Brand1"}
                  options={[
                    { value: "Brand 2", label: "Brand 2" },
                    { value: "Brand 3", label: "Brand 3" },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={5}>
              <Form.Item label="Type" name="type">
                <Select
                  defaultValue={"Loai 1"}
                  options={[
                    { value: "loai 2", label: "loai 2" },
                    { value: "loai 3", label: "loai 3" },
                  ]}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={10}>
              <Form.Item label="Name" name="name">
                <Input />
              </Form.Item>
            </Col>
            <Col span={5}>
              <Form.Item label="Category" name="category">
                <Select
                  defaultValue={"Loai 1"}
                  options={[
                    { value: "loai 2", label: "loai 2" },
                    { value: "loai 3", label: "loai 3" },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item label="Price" name="price">
                <Input />
              </Form.Item>
            </Col>
            <Col span={2}>
              <Form.Item label="Size" name="size">
                <Select disabled />
              </Form.Item>
            </Col>
            <Col span={3}>
              <Form.Item label="Quantity" name="quantity">
                <Input disabled/>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={10}>
              <Form.Item label="Description" name="description">
                <Input style={{ height: 100 }} />
              </Form.Item>
            </Col>
            <Col span={14}>
              <Form.Item label="Image" name="image">
                <Upload action="/upload.do" listType="picture-card">
                  <button
                    style={{ border: 0, background: "none" }}
                    type="button"
                  >
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </button>
                </Upload>
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <Button onClick={handleClosePro}>Cancel</Button>
        <Button style={{ marginLeft: 20 }} onClick={() => from.submit}>
          OK
        </Button>
      </Modal>
    </div>
  );
};

export default EditProduct;
