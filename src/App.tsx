import "./App.scss";
import Notification from "./components/Notification";
import RenderRouter from "./routes";
import { useSelector } from "react-redux";
const App = () => {
  const notificationProps = useSelector((state: any) => state.notification);
  return (
    <>
      {notificationProps && <Notification {...notificationProps} />}
      <RenderRouter />
    </>
  );
};

export default App;
