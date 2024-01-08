import { combineReducers } from "@reduxjs/toolkit";
import loadingReducer from "./reducers/loadingReducer";

const rootReducer = combineReducers({
  loading: loadingReducer,
});

export default rootReducer;
