import userReducer from "./userReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({

  userReducer,
});

export default rootReducer;
