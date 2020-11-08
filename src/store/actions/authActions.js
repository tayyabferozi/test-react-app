import axios from "axios";

import * as actionTypes from "./actionTypes";
import setAxiosAuthHeader from "../../utils/set-axios-auth-header";
import isEmpty from "../../utils/is-empty";

const authStart = () => {
  return { type: actionTypes.AUTH_START };
};

const authSuccess = (companyId, loginId, username, password) => {
  setAxiosAuthHeader(username, password);
  return {
    type: actionTypes.AUTH_SUCCESS,
    username,
    password,
    companyId,
    loginId,
  };
};

const authLogout = () => {
  localStorage.removeItem("username");
  localStorage.removeItem("password");
  localStorage.removeItem("companyId");
  localStorage.removeItem("loginId");

  return { type: actionTypes.AUTH_LOGOUT };
};

export const auth = (authData) => (dispatch) => {
  dispatch(authStart());

  axios
    .post("/getlogin", {
      username: authData.email,
      password: authData.password,
    })
    .then((res) => {
      let convertedRes = JSON.parse(res.data);
      console.log(res.data);
      const { CompanyID, LoginID, Username, Password } = convertedRes;
      console.log(convertedRes);
      if (CompanyID !== 0) {
        localStorage.setItem("username", Username);
        localStorage.setItem("password", Password);
        localStorage.setItem("companyId", CompanyID);
        localStorage.setItem("loginId", LoginID);
        dispatch(authSuccess(CompanyID, LoginID, Username, Password));
      } else {
        dispatch({ type: actionTypes.AUTH_FAIL });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const authCheckState = () => (dispatch) => {
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");
  const companyId = localStorage.getItem("companyId");
  const loginId = localStorage.getItem("username");
  if (
    !isEmpty(username) &&
    !isEmpty(password) &&
    !isEmpty(companyId) &&
    !isEmpty(loginId)
  ) {
    dispatch(authSuccess(companyId, loginId, username, password));
  } else {
    dispatch(authLogout());
  }
};
