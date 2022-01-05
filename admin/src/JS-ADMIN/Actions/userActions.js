/********* *******************    User register action creator ********************************** */

import axios from "axios";
import {
  LOG_OUT,
  USER_LOGIN,
  USER_LOGIN_FAILED,
  USER_LOGIN_SUCCESS,
 
} from "../ActionTypes/userActionsTypes";

/********* *******************    User Longin action creator ********************************** */
export const userLogin = (userCred) => async (dispatch) => {
  dispatch({ type: USER_LOGIN });

  try {
    const res = await axios.post("/api/auth/login", userCred);
    console.log(res);
    localStorage.setItem("accessToken", res.data.accessToken);
    dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAILED, payload: error.res.data.msg });
  }
};

/*******************************  Log Out ********** */

export const logOut = () => (dispatch) => {
  dispatch({ type: LOG_OUT });
  localStorage.removeItem("token");
};
