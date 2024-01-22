import { Button, Col, Form, Input, Modal, Row } from "antd";
import React from "react";
import { getChinhSuaMenu } from "../api";
import { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { showNotification } from "../../../stores/reducers/notificationReducer";

type Props = {
  isModalEdit: boolean;
  setIsModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
  selectedRecordId: string | null;
  setParamSearch: React.Dispatch<React.SetStateAction<object>>;
};

const EditData = (props: Props) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [newName, setNewName] = useState("");
  const [newPath, setNewPath] = useState("");
  const [newIcon, setNewIcon] = useState("");
  const [initialValues,setInitialValues] = useState({})
  const { isModalEdit, setIsModalEdit, selectedRecordId, setParamSearch } =
    props;

  const handleClose = () => {
    setIsModalEdit(false);
    form.resetFields();
  };
  const handlleSave = () => {
    form.submit();
    setIsModalEdit(false);
  };

  const getDetailById = async (): Promise<void> => {
    if (selectedRecordId) { 
      try {
        const Newdata = {
          name: newName,
          path: newPath,
          icon: newIcon,
        };
        await form.validateFields();
        const res = await getChinhSuaMenu(selectedRecordId, Newdata);
          if (res.status) {
          dispatch(showNotification({ message: res.message, type: "success" }));
          handleClose();
          setParamSearch({ name: 1 });
          
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       if (selectedRecordId) {
  //         const res = await getId(selectedRecordId);
  //         setInitialValues(res.data)
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, [selectedRecordId]);
  // useEffect(()=>{
    // form.setFieldValue(selectedRecordId)
  // },[selectedRecordId])

  const onchangeNewName = (e: ChangeEvent<HTMLInputElement>) => {
    setNewName(e.currentTarget.value);
  };
  const onchangeNewPath = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPath(e.currentTarget.value);
  };
  const onchangeNewIcon = (e: ChangeEvent<HTMLInputElement>) => {
    setNewIcon(e.currentTarget.value);
  };
  

  return (
    <div>
      <Modal
        style={{ textAlign: "center" }}
        title="Edit Data"
        open={isModalEdit}
        width={700}
        footer={null}
        onCancel={handleClose}
        
      >
        <div>
          <Form 
          
            onFinish={getDetailById}
            initialValues={initialValues}
            form={form}
            style={{ margin: 30 }}
            layout="vertical"
          >
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col span={8}>
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[
                    { required: true, message: "Please input your name!" },
                  ]}
                >
                  <Input onChange={onchangeNewName} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="path"
                  label="Path"
                  rules={[
                    { required: true, message: "Please input your path!" },
                  ]}
                >
                  <Input onChange={onchangeNewPath} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="icon"
                  label="Icon"
                  rules={[
                    { required: true, message: "Please input your Icon!" },
                  ]}
                >
                  <Input onChange={onchangeNewIcon} />
                </Form.Item>
              </Col>
            </Row>
          </Form>
          <div >
            <Button onClick={() => handleClose()}> Cancel</Button>
            <Button onClick={() => handlleSave()}>Save</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EditData;
