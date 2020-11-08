import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import DataTable from "../../components/Tables/DataTable";
import changeTitle from "../../utils/change-title";

const SMSLog = () => {
  const { eventId } = useParams();
  const [sessionsState, setSessionsState] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    changeTitle("Sessions");
    axios.get(`/geteventsessionslist/${eventId}`).then((res) => {
      const convertedRes = JSON.parse(res.data);
      setSessionsState(convertedRes);
      setIsLoading(false);
    });
    return () => {};
  }, [eventId]);
  const logs = [
    {
      number: "645654",
      date: "15/10/2020 09:00 AM",
      status: "",
      name: "John Doe",
      email: "jondoe@test.com",
      phone: "0430175160",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quisquam ab est dolores autem quas quaerat eius minus necessitatibus. Harum, repellat quod voluptates corporis aspernatur, similique accusantium aliquid vitae, dignissimos omnis perferendis error in voluptatem debitis. Dignissimos quos debitis rerum.",
    },
    {
      number: "645654",
      date: "15/10/2020 09:00 AM",
      status: "",
      name: "John Doe",
      email: "jondoe@test.com",
      phone: "0430175160",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quisquam ab est dolores autem quas quaerat eius minus necessitatibus. Harum, repellat quod voluptates corporis aspernatur, similique accusantium aliquid vitae, dignissimos omnis perferendis error in voluptatem debitis. Dignissimos quos debitis rerum.",
    },
    {
      number: "645654",
      date: "15/10/2020 09:00 AM",
      status: "",
      name: "John Doe",
      email: "jondoe@test.com",
      phone: "0430175160",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quisquam ab est dolores autem quas quaerat eius minus necessitatibus. Harum, repellat quod voluptates corporis aspernatur, similique accusantium aliquid vitae, dignissimos omnis perferendis error in voluptatem debitis. Dignissimos quos debitis rerum.",
    },
    {
      number: "645654",
      date: "15/10/2020 09:00 AM",
      status: "",
      name: "John Doe",
      email: "jondoe@test.com",
      phone: "0430175160",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quisquam ab est dolores autem quas quaerat eius minus necessitatibus. Harum, repellat quod voluptates corporis aspernatur, similique accusantium aliquid vitae, dignissimos omnis perferendis error in voluptatem debitis. Dignissimos quos debitis rerum.",
    },
  ];

  useEffect(() => {
    changeTitle("SMS Log");
  }, []);

  return (
    <DataTable
      heading="SMS Log"
      titles={[
        "Order No",
        "Date",
        "Status",
        "Name",
        "Email",
        "Phone",
        "Message",
      ]}
    >
      {logs.map((order, index) => {
        return (
          <tr key={Math.random()}>
            <td>{index + 1}</td>
            <td>{order.number}</td>
            <td>{order.date}</td>
            <td>{order.status}</td>
            <td>{order.name}</td>
            <td>{order.email}</td>
            <td>{order.phone}</td>
            <td style={{ minWidth: "400px" }}>{order.message}</td>
          </tr>
        );
      })}
    </DataTable>
  );
};

export default SMSLog;
