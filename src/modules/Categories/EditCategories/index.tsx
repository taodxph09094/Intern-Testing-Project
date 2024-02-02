import React, { ChangeEvent, useEffect, useState } from "react";
import { Button, Col, Form, Input, Modal, Row } from "antd";
import { ProductType } from "../../Menu/dto";
import { putCategories } from "../../Menu/api";
import { useDispatch } from "react-redux";
import { showNotification } from "../../../stores/reducers/notificationReducer";

type Props = {
  modalEditType: boolean;
  setModalEditType: React.Dispatch<React.SetStateAction<boolean>>;
  updateData: ProductType | null;
  selectedRecordId: string | null;
  setparamSearch: React.Dispatch<React.SetStateAction<{}>>
};
const EditCategories = (props: Props) => {
  const { modalEditType, setModalEditType, updateData, selectedRecordId,setparamSearch } =
    props;
  const [from] = Form.useForm();
  const dispatch = useDispatch();
  const [newName, setNewName] = useState("");
  const [initialValues, setInitialValues] = useState({});

  useEffect(() => {
    if (updateData) {
      from.setFieldsValue({
        name: updateData.name,
      });
      setInitialValues({
        name: updateData.name,
      });
    }
  }, [updateData, from, setInitialValues]);
  const handleClose = () => {
    setModalEditType(false);
    from.resetFields()
  };

  const updateProductType = async (): Promise<void> => {
    if (selectedRecordId) {
      try {
        const newData = {
          name: newName,
        };
        await from.validateFields();
        const Response = await putCategories(selectedRecordId, newData);
        if (Response.status) {
          dispatch(
            showNotification({ message: Response.message, type: "success" })
          );
          setparamSearch({name:1})
          handleClose()
        } else {
          dispatch(
            showNotification({ message: Response.message, type: "error" })
          );
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  const onChangeNewName = (e: ChangeEvent<HTMLInputElement>) => {
    setNewName(e.currentTarget.value);
  };
  return (
    <div>
      <Modal
        title="Update Category - Id"
        open={modalEditType}
        onCancel={handleClose}
        style={{ textAlign: "center" }}
        footer={null}
      >
        <Form
          initialValues={initialValues}
          onFinish={updateProductType}
          layout="vertical"
          form={from}
          style={{ marginTop: 20 }}
        >
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={24}>
              <Form.Item label="Name" name="name">
              <Input placeholder="name" onChange={onChangeNewName} />
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

export default EditCategories;
