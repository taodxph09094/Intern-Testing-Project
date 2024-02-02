import React, { ChangeEvent, useEffect, useState } from "react";
import { Button, Col, Form, Input, Modal, Row } from "antd";
import { Brand } from "../../Menu/dto";
import { putBrand } from "../../Menu/api";
import { useDispatch } from "react-redux";
import { showNotification } from "../../../stores/reducers/notificationReducer";

type Props = {
  setModalEditBrand: React.Dispatch<React.SetStateAction<boolean>>;
  modalEditBrand: boolean;
  setSelectedRecordId: React.Dispatch<React.SetStateAction<string | null>>
  upadteData: Brand | null;
  selectedRecordId: string | null
  setParamSearch: React.Dispatch<React.SetStateAction<{}>>
};
const EditBrand = (props: Props) => {
  const { setModalEditBrand, modalEditBrand, upadteData,selectedRecordId,setParamSearch } =
    props;
  const [from] = Form.useForm();
  const dispatch = useDispatch()
  const [initialValues, setInitialValues] = useState({});
  const [newName, setNewName] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [newPhone, setNewPhone] = useState("");


  const handleCloseBr = () => {
    setModalEditBrand(false);
  };
  useEffect(() => {
    if (upadteData) {
      from.setFieldsValue({
        name: upadteData.name,
        address: upadteData.address,
        phone: upadteData.phone,
      });
      setInitialValues({
        name: upadteData.name,
        address: upadteData.address,
        phone: upadteData.phone,
      });
    }
  }, [upadteData, from, setInitialValues]);

  const updateBrand = async(): Promise<void> =>{
    if(selectedRecordId){
      const newData= {
        name:newName,
        address:newAddress,
        phone:newPhone,
      }
      try{
        const Response = await putBrand(selectedRecordId,newData);
        if(Response.status){
          dispatch(showNotification({message:Response.message, type:"success"}))
          setParamSearch({name:1})
          handleCloseBr()
        }else{
          dispatch(showNotification({message:Response.message, type:"error"}))

        }
      }catch(error){
        console.log(error)
      }
    }

  }

  const onchangeNewName = (e: ChangeEvent<HTMLInputElement>) => {
    setNewName(e.currentTarget.value);
  };
  const onchangeNewAddress = (e: ChangeEvent<HTMLInputElement>) => {
    setNewAddress(e.currentTarget.value);
  };
  const onchangeNewPhone = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPhone(e.currentTarget.value);
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
        <Form
          onFinish={updateBrand}
          layout="vertical"
          style={{ margin: "10px 0 20px  0" }}
          initialValues={initialValues}
          form={from}
        >
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={7}>
              <Form.Item label="Name" name="name">
                <Input  onChange={onchangeNewName}/>
              </Form.Item>
            </Col>
            <Col span={10}>
              <Form.Item label="Address" name="address">
              <Input  onChange={onchangeNewAddress}/>

              </Form.Item>
            </Col>
            <Col span={7}>
              <Form.Item label="Phone" name="phone">
              <Input  onChange={onchangeNewPhone}/>

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
