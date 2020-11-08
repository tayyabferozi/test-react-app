import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

import changeTitle from "../../utils/change-title";
import TableActions from "../../components/Buttons/TableActions";
import DataTable from "../../components/Tables/DataTable";
import Loader from "../../components/UI/Loader";

const Sessions = () => {
  const { eventId } = useParams();
  const [sessionsState, setSessionsState] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const eventName = "Adelaide Family Show";

  useEffect(() => {
    axios.get(`/geteventsessionslist/${eventId}`).then((res) => {
      const convertedRes = JSON.parse(res.data);
      setSessionsState(convertedRes);
      setIsLoading(false);
    });
    return () => {};
  }, [eventId]);

  useEffect(() => {
    changeTitle("Sessions");
  }, []);

  return (
    <div className="container-fluid p-3">
      {/* <h5>{eventName}</h5> */}
      <hr />

      {isLoading ? (
        <Loader />
      ) : (
        <DataTable
          heading="Sessions"
          titles={[
            "Start Date/Time",
            "End Date/Time",
            "Bookings",
            "Total",
            "Attended",
            "Unattended",
            "Action",
          ]}
        >
          {sessionsState.map((session, index) => {
            return (
              <tr key={Math.random()}>
                <td>{index + 1}</td>
                <td>{session.SessionStartDateTime}</td>
                <td>{session.SessionEndDateTime}</td>
                <td>{session.Bookings}</td>
                <td>{session.Total}</td>
                <td>{session.Attended}</td>
                <td>{session.Unattended}</td>
                <TableActions>
                  <Link
                    to={`/orders/${session.SessionID}/0`}
                    className="dropdown-item"
                  >
                    Orders
                  </Link>
                  <Link
                    to={`/sms-log/${session.SessionID}`}
                    className="dropdown-item"
                  >
                    SMS
                  </Link>
                  <Link to={`/Email/${""}`} className="dropdown-item">
                    Email
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

export default Sessions;
