import { Button, Form, Input, notification } from "antd";
import React from "react";
import { Login } from "../interfaces/user";
import { useDispatch } from "react-redux";

type Props = {};

const AuthLayout: React.FC = (props: Props) => {
    const dispatch = useDispatch();
  const onFinish = (values: Login) => {
    console.log("Success:", values);

    // notification.success({
    //     message: 'Đăng nhập thành công',
    //     description:
    //       `Xin chào ${values.email}! Bạn đã đăng nhập thành công.`,

    //   });
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="illustration-wrapper">
          <img
            src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700"
            alt="Login"
          />
        </div>
        <Form
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <p className="form-title">Welcome back</p>
          <p>Login to the Dashboard</p>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              LOGIN
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AuthLayout;
