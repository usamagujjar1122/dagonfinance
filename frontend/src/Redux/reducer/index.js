import { combineReducers } from "redux";
import alertReducer from "./alertreducer";
import userReducer from "./userReducer";
export default combineReducers({
  user: userReducer,
  alert:alertReducer
});
