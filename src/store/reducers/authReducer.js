import * as actionTypes from "../actions/actionTypes";
import updateObject from "../../utils/update-object";
// import isEmpty from "../../utils/is-empty";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  errors: null,
  loginId: null,
  companyId: null,
  username: null,
  password: null,
};

const authStart = (state, action) => {
  return updateObject(state, { isLoading: true, errors: null });
};

const authSuccess = (state, action) => {
  const { username, password, loginId, companyId } = action;
  return updateObject(state, {
    isLoading: false,
    isAuthenticated: true,
    errors: null,
    username,
    loginId,
    password,
    companyId,
  });
};

const authFail = (state, action) => {
  return updateObject(state, { isLoading: false });
};

const authLogout = (state, action) => {
  return updateObject(state, {
    isAuthenticated: false,
    loginId: null,
    username: null,
    password: null,
    companyId: null,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    default:
      return { ...state };
  }
};

export default reducer;
