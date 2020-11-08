import React, { useEffect, Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import H4 from "../../components/Headings/H4";
import DataTable from "../../components/Tables/DataTable";
import Loader from "../../components/UI/Loader";
import SideBySide from "../../components/UI/SideBySide";
import changeTitle from "../../utils/change-title";

const OrderDetails = () => {
  const [ordersState, setOrdersState] = useState([]);
  // const [attendeeState, setAttendeeState] = useState([]);
  const { orderId } = useParams();
  const [attendeeIsLoading, setAttendeeIsLoading] = useState(true);
  const [orderIsLoading, setOrderIsLoading] = useState(true);

  useEffect(() => {
    changeTitle("Order Details");
  }, []);

  // useEffect(() => {
  //   setAttendeeIsLoading(true);
  //   const CancelToken = axios.CancelToken;
  //   const source = CancelToken.source();
  //   axios
  //     .get(`/getorderitem/${orderId}`, {
  //       cancelToken: source.token,
  //     })
  //     .then((res) => {
  //       const convertedRes = JSON.parse(res.data);
  //       setAttendeeState(convertedRes);
  //       console.log("ATTENDEE");
  //       console.log(convertedRes);
  //       setAttendeeIsLoading(false);
  //     })
  //     .finally(() => source.cancel());
  // }, [orderId]);

  useEffect(() => {
    setOrderIsLoading(true);
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    axios
      .get(`/getorder/${orderId}`, {
        cancelToken: source.token,
      })
      .then((res) => {
        const convertedRes = JSON.parse(res.data);
        console.log("ORDER");
        setOrdersState(convertedRes);
        console.log(convertedRes);
        setOrderIsLoading(false);
      })
      .finally(() => source.cancel());
  }, [orderId]);

  return (
    <Fragment>
      {orderIsLoading ? (
        <Loader />
      ) : (
        <section>
          <H4>Order Details:</H4>
          <SideBySide left="Event Name:" right={ordersState.EventName} />
          <SideBySide
            left="Session:"
            right={`
              ${ordersState.SessionStartDateTime} - ${ordersState.SessionEndDateTime}
            `}
          />
          <SideBySide left="Event Address" right={ordersState.EventAddress} />
          <SideBySide left="Order No:" right={ordersState.OrderNo} />
          <SideBySide left="Date:" right={ordersState.OrderDate} />
          <SideBySide left="Name:" right={ordersState.ContactName} />
          <SideBySide left="Email:" right={ordersState.ContactEmail} />
          <SideBySide left="Phone:" right={ordersState.ContactPhone} />
        </section>
      )}

      <hr />

      {/* {attendeeIsLoading ? (
        <Loader />
      ) : (
        <section>
          <DataTable
            heading="Order Details:"
            titles={["Price", "Quantity", "Total"]}
          >
            {attendeeState.map((email, index) => {
              return (
                <tr key={Math.random()}>
                  <td>{index + 1}</td>
                  <td>{email.date}</td>
                  <td>{email.subject}</td>
                  <td>{email.email}</td>
                </tr>
              );
            })}
          </DataTable>
          <SideBySide left="Sub Total:" right={""} />
          <SideBySide left="Booking Fee:" right={""} />
          <SideBySide left="Total Amount:" right={""} />
          <SideBySide left="Paid Amount:" right={""} />
        </section>
      )} */}
    </Fragment>
  );
};

export default OrderDetails;

// import React, { Fragment, useEffect } from "react";
// import FormButton from "../../components/Buttons/FormButton";
// import FormGroup from "../../components/FormElements/FormGroup";
// import Select from "../../components/FormElements/Select";

// import H4 from "../../components/Headings/H4";
// import DataTable from "../../components/Tables/DataTable";
// import SideBySide from "../../components/UI/SideBySide";
// import changeTitle from "../../utils/change-title";

// const OrderDetails = () => {
//   const emails = [
//     {
//       date: "10/21/2020 1:25PM",
//       subject: "eTicket Adelaide Family Show",
//       email:
//         "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio possimus earum veritatis maxime voluptatum maiores eveniet inventore facere repellendus, tempora modi deleniti quam delectus! Voluptatem earum recusandae eveniet placeat pariatur adipisci provident maxime itaque modi quae quisquam voluptatum veniam excepturi, dicta odit! Nemo natus cumque deleniti in asperiores, laboriosam eligendi.",
//     },
//   ];

//   useEffect(() => {
//     changeTitle("Order Details");
//   }, []);

//   return (
//     <Fragment>
//       <section>
//         <H4>Order Details:</H4>
//         <SideBySide left="Event Name:" right="Adelaide Family Show" />
//         <SideBySide left="Session:" right="18/10/2020 10:00AM - 01:00 PM" />
//         <SideBySide
//           left="Event Location:"
//           right="Edwards Park Anzac Hwy, Adelaide SA 5000"
//         />
//         <SideBySide left="Order No:" right="4165441" />
//         <SideBySide left="Date:" right="21/10/2020" />
//       </section>

//       <hr />

//       <section>
//         <H4>Session Details:</H4>

//         <div className="basic-form">
//           <form>
//             <div className="basic-form">
//               <FormGroup>
//                 <Select
//                   options={[
//                     { text: "Please select a suitable category", value: "" },
//                     { text: "Option 2", value: "lorem" },
//                   ]}
//                 />
//               </FormGroup>

//               <FormGroup>
//                 <FormButton>Update Session</FormButton>
//               </FormGroup>
//             </div>
//           </form>
//         </div>
//       </section>

//       <hr />

//       <section>
//         <H4>Payment Details</H4>

//         <div className="basic-form">
//           <form>
//             <div className="basic-form">
//               <FormGroup>
//                 <Select
//                   options={[
//                     { text: "Please select a suitable reason", value: "" },
//                     { text: "Option 2", value: "lorem" },
//                   ]}
//                 />
//               </FormGroup>

//               <FormGroup>
//                 <FormButton>Proccess Refund</FormButton>
//               </FormGroup>
//             </div>
//           </form>
//         </div>
//       </section>

//       <hr />

//       <DataTable heading="SMS Details" style={{ width: "100%" }}></DataTable>

//       <hr />

//       <DataTable heading="Email Details:" titles={["Date", "Subject", "Email"]}>
//         {emails.map((email, index) => {
//           return (
//             <tr key={Math.random()}>
//               <td>{index + 1}</td>
//               <td>{email.date}</td>
//               <td>{email.subject}</td>
//               <td>{email.email}</td>
//             </tr>
//           );
//         })}
//       </DataTable>
//     </Fragment>
//   );
// };

// export default OrderDetails;
