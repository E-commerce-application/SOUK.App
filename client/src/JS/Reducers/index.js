
import cartReducer from "./cartReducers";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
  cartReducer, 
}) 

export default rootReducer;