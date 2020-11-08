import axios from "axios";
import { useDispatch } from "react-redux";

import Routes from "./Routes";
import { authCheckState } from "./store/actions/authActions";

axios.defaults.baseURL = "https://ticketingapi.webnapp.com.au/api/company/";

function App() {
  const dispatch = useDispatch();
  dispatch(authCheckState());

  return <Routes />;
}

export default App;
