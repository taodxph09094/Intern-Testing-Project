import { combineReducers } from "@reduxjs/toolkit";
import loadingReducer from "./reducers/loadingReducer";
import notificationReducer from "./reducers/notificationReducer";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
  loading: loadingReducer,
  notification: notificationReducer,
  user: userReducer,
});

export default rootReducer;
