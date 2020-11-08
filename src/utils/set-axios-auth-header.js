import axios from "axios";

import isEmpty from "../utils/is-empty";

const setAxiosAuthHeader = (username, password) => {
  if (!isEmpty(username) && !isEmpty(password)) {
    const str = username + ":" + password;
    const token = btoa(str);
    axios.defaults.headers.common["Authorization"] = "Basic " + token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAxiosAuthHeader;
