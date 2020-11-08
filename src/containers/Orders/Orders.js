import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";

import changeTitle from "../../utils/change-title";
import DataTable from "../../components/Tables/DataTable";
import TableActions from "../../components/Buttons/TableActions";
import Loader from "../../components/UI/Loader";
import H4 from "../../components/Headings/H4";

const Orders = () => {
  const [statuses] = useState([
    "Inactive Orders",
    "Active Orders",
    "Refunded Orders",
    "System Refunded Orders",
    "All Orders",
  ]);
  const { sessionId, status } = useParams();
  const [ordersState, setOrdersState] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    setIsLoading(true);
    let URL = "/getorderslist";
    let reqParams = {
      SessionID: parseInt(sessionId),
      Status: parseInt(status),
    };
    if (sessionId === "duplicate-orders") {
      URL = "/getduplicateorderslist";
      reqParams = { Status: parseInt(status) };
    }
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    axios
      .post(URL, reqParams, {
        cancelToken: source.token,
      })
      .then((res) => {
        const convertedRes = JSON.parse(res.data);
        setOrdersState(convertedRes);
        setIsLoading(false);
      })
      .finally(() => source.cancel());
    return () => {};
  }, [sessionId, status]);

  useEffect(() => {
    changeTitle("Orders");
  }, [history]);

  return (
    <div className="container-fluid p-3">
      <div>
        <H4>Status</H4>
        <div className="d-flex justify-content-center align-items-center my-3">
          {statuses.map((el, index) => {
            return (
              <button
                key={index}
                className="btn btn-outline-primary mx-3"
                onClick={() =>
                  history.replace(`/proxy-comp/${sessionId}/${index}`)
                }
              >
                {el}
              </button>
            );
          })}
        </div>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <DataTable
          heading={statuses[status]}
          titles={["Order No", "Date", "Name", "Email", "Phone", "Actions"]}
        >
          {ordersState.map((order, index) => {
            return (
              <tr key={Math.random()}>
                <td>{index + 1}</td>
                <td>
                  <Link
                    className="text-primary"
                    to={`/order-details/${order.OrderNo}`}
                  >
                    {order.OrderNo}
                  </Link>
                </td>
                <td>{order.OrderDate}</td>
                <td>{order.ContactName}</td>
                <td>{order.ContactEmail}</td>
                <td>{order.ContactPhone}</td>

                <TableActions>
                  <Link
                    to={`/orders/${order.SessionID}`}
                    className="dropdown-item"
                  >
                    Admin
                  </Link>
                  <Link
                    to={`/order-details/${order.OrderID}`}
                    className="dropdown-item"
                  >
                    Order Details
                  </Link>
                  <Link
                    to={`/sms-log/${order.SessionID}`}
                    className="dropdown-item"
                  >
                    Admin Order
                  </Link>
                  <Link to={`/email/${""}`} className="dropdown-item">
                    Send Email
                  </Link>
                </TableActions>
              </tr>
            );
          })}
        </DataTable>
      )}
    </div>
  );
};

export default Orders;
