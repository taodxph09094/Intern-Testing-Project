import { Button, Form, Input } from "antd";
import React from "react";
import { Login } from "../interfaces/user";
import { loginUser } from "../api/components/userApi";
import { useDispatch } from "react-redux";
import { showNotification } from "../stores/reducers/notificationReducer";
import { Formik, Field, ErrorMessage } from "formik";
import { loginValidationSchema } from "./components/loginValidationSchema";
import { setUser } from "../stores/reducers/userReducer";
import { useNavigate } from "react-router-dom";

const AuthLayout: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const onFinish = async (values: Login) => {
    const response = await loginUser(values);
    if (response.status) {
      localStorage.setItem(
        "user_token",
        JSON.stringify(response?.result?.data?.token)
      );
      dispatch(setUser(response.result.data?.user));
      dispatch(
        showNotification({ message: response.message, type: "success" })
      );
      navigate("/");
    } else {
      dispatch(showNotification({ message: response.message, type: "error" }));
    }
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

        <Formik
          initialValues={initialValues}
          validationSchema={loginValidationSchema}
          onSubmit={onFinish}
        >
          {(formikProps) => (
            <Form name="login-form" onFinish={formikProps.handleSubmit}>
              <p className="form-title">Welcome back</p>
              <p>Login to the Dashboard</p>
              <Form.Item>
                <Field
                  name="email"
                  placeholder="Email"
                  as={Input}
                  className={
                    formikProps.values.email === "" ||
                    formikProps.values.email == null
                      ? "input-error"
                      : "input-not"
                  }
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-message"
                />
              </Form.Item>
              <Form.Item>
                <Field
                  name="password"
                  placeholder="Password"
                  as={Input.Password}
                  style={{
                    border:
                      formikProps.values.password === "" ||
                      formikProps.values.password == null
                        ? "1.5px solid red"
                        : null,
                  }}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error-message"
                />
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
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AuthLayout;
