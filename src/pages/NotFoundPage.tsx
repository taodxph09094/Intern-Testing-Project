import { Button, Result } from "antd";

const NotFoundPage = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Đã có lỗi xảy ra, vui lòng thử lại"
      extra={<Button type="primary">Quay lại</Button>}
    />
  );
};

export default NotFoundPage;
