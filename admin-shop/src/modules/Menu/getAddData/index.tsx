import { Button, Col, Form, Input, Modal, Row } from "antd";
import React from "react";
import { AddData } from "../dto";
import { getThemMenu } from "../api";
import { useDispatch } from "react-redux";
import { showNotification } from "../../../stores/reducers/notificationReducer";
type Props = {
  isModal: boolean;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
  setParamSearch: React.Dispatch<React.SetStateAction<object>>;
};

const AddData = (props: Props) => {
  const [form] = Form.useForm();
  const { isModal, setIsModal, setParamSearch } = props;
  const dispatch = useDispatch();


  const handleClose = () => {
    setIsModal(false);
    form.resetFields();
  };
  const onSubmit = async (values: AddData) => {
    try {
      await form.validateFields();
      const res = await getThemMenu(values);
      if (res.status) {
        dispatch(showNotification({ message: res.message, type: "success" }));
        handleClose();
        setParamSearch({name: 1})
    
      } else {
        dispatch(showNotification({ message: res.message, type: "error" }));
      }
    } catch (error) {
      /* empty */
    }
  };
  return (
    <Modal
      title="Add item menu"
      width={700}
      open={isModal}
      footer={null}
      onCancel={handleClose}
    >
      <div style={{ margin: 30 }}>
        <Form onFinish={onSubmit} form={form} layout="vertical">
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={8}>
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input placeholder="Name" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="path"
                label="Path"
                rules={[{ required: true, message: "Please input your path!" }]}
              >
                <Input placeholder="Path" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="icon"
                label="Icon"
                rules={[{ required: true, message: "Please input your icon!" }]}
              >
                <Input placeholder="Url icon" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
      <div style={{ display: "flex" }}>
        <Button onClick={() => handleClose()}>Cancel</Button>
        <Button onClick={() => form.submit()}>OK</Button>
      </div>
    </Modal>
  );
};

export default AddData;
