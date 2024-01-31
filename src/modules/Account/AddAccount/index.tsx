// import { Button, Col, Form, Input, Modal, Row } from "antd";
// import React from "react";
// import { AddAccount } from "../../Menu/dto";
// import { getThemAccount } from "../../Menu/api";
// import { useDispatch } from "react-redux";
// import { showNotification } from "../../../stores/reducers/notificationReducer";

// type Props = {
//   setModalAccount: React.Dispatch<React.SetStateAction<boolean>>;
//   modalAccount: boolean;
//   setParamSearch: React.Dispatch<React.SetStateAction<object>>;
// };
// const AddAccount = (props: Props) => {
//   const { modalAccount, setModalAccount, setParamSearch } = props;
//   const [form] = Form.useForm();
//   const dispatch = useDispatch();
//   const onSubmit = async (values: AddAccount) => {
//     try {
//       await form.validateFields();
//       const Response = await getThemAccount(values);
//       console.log(values, "cupng");
//       if (Response.status) {
//         console.log(Response.result, "c9pgl");
//         dispatch(
//           showNotification({ message: Response.message, type: "success" })
//         );
//         handleCloseAcc();
//         setParamSearch({ name: 1 });
//       } else {
//         dispatch(
//           showNotification({ message: Response.message, type: "error" })
//         );
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleCloseAcc = () => {
//     setModalAccount(false);
//     form.resetFields();
//   };

//   return (
//     <div>
//       <Modal
//         title="Add Account"
//         open={modalAccount}
//         onCancel={handleCloseAcc}
//         style={{ textAlign: "center" }}
//         footer={null}
//       >
//         <Form
//           onFinish={onSubmit}
//           form={form}
//           layout="vertical"
//           style={{ marginTop: 40 }}
//         >
//           <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
//             <Col span={12}>
//               <Form.Item label="Name" name="name">
//                 <Input />
//               </Form.Item>
//             </Col>
//             <Col span={12}>
//               <Form.Item label="Email" name="email">
//                 <Input />
//               </Form.Item>
//             </Col>
//           </Row>
//           <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
//             <Col span={12}>
//               <Form.Item label="Password" name="pasword">
//                 <Input />
//               </Form.Item>
//             </Col>
//             <Col span={12}>
//               <Form.Item label="Phone" name="phone">
//                 <Input />
//               </Form.Item>
//             </Col>
//           </Row>

//           {/* <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}> */}
//           <Col>
//             <Form.Item label="Address" name="address">
//               <Input />
//             </Form.Item>
//           </Col>
//           {/* </Row>  */}
//         </Form>
//         <Button onClick={handleCloseAcc}>Cancel</Button>
//         <Button style={{ marginLeft: 20 }} onClick={() => form.submit()}>
//           Ok
//         </Button>
//       </Modal>
//     </div>
//   );
// };

// export default AddAccount;
