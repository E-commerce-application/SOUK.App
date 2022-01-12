import cartReducer from "./cartReducers";
import userReducer from "./userReducers";
import { combineReducers } from "redux";



const rootReducer = combineReducers({
 cart: cartReducer,
  userReducer,
});

export default rootReducer;
