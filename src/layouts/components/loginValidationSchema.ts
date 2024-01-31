import * as Yup from "yup";

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Không được để trống")
    .email("Định dạng email không hợp lệ"),
  password: Yup.string()
    .required("Không được để trống")
    .min(6, "Mật khẩu tối thiểu 6 ký tự"),
});
