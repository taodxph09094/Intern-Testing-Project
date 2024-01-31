import { PlusOutlined } from "@ant-design/icons";
import { Col, Form, Modal, Row, Input, Select, Upload, Button } from "antd";

type Props = {
  setModalAdd: React.Dispatch<React.SetStateAction<boolean>>;
  modalAdd: boolean;
};
const AddProduct = (props: Props) => {
  const { modalAdd, setModalAdd } = props;
  const [from] = Form.useForm()
  const handleClosePro = () => {
    setModalAdd(false);
  };
  return (
    <div>
      <Modal
        open={modalAdd}
        onCancel={handleClosePro}
        title="Add Prodcut"
        style={{textAlign:'center'}}
        width={1200}
        footer={null}
      >
        <Form layout="vertical" style={{marginTop:50}}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={10}>
              <Form.Item label="Code" name="code">
                <Input />
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
              <Select
                  defaultValue={"S"}
                  options={[
                    { value: "M", label: "M" },
                    { value: "L", label: "L" },
                    { value: "X", label: "X" },
                    { value: "XXL", label: "XXL" },
                    { value: "3XL", label: "3XL" },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={3}>
              <Form.Item label="Quantity" name="quantity">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={10}>
              <Form.Item label="Description" name="description">
                <Input style={{height:100}}/>
              </Form.Item>
            </Col>
            <Col span={14}>
              <Form.Item label="Image" name="image">
              <Upload action="/upload.do" listType="picture-card">
            <button style={{ border: 0, background: 'none' }} type="button">
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </button>
          </Upload>
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <Button onClick={handleClosePro}>Cancel</Button>
        <Button style={{marginLeft:20}} onClick={() => from.submit}>OK</Button>
      </Modal>
    </div>
  );
};

export default AddProduct;
