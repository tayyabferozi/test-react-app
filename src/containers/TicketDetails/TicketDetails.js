import React, { Fragment, useEffect } from "react";

import changeTitle from "../../utils/change-title";
import H4 from "../../components/Headings/H4";
import DataTable from "../../components/Tables/DataTable";
import SideBySide from "../../components/UI/SideBySide";

const OrderDetails = () => {
  const tickets = [{ type: "Kids under 2 (Free)", left: "4", attendees: "4" }];

  useEffect(() => {
    changeTitle("Ticket Details");
  }, []);

  return (
    <Fragment>
      <DataTable heading="Tickets Left:" titles={["Type", "Left", "Attendees"]}>
        {tickets.map((order, index) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td>{order.type}</td>
              <td>{order.left}</td>
              <td>{order.attendees}</td>
            </tr>
          );
        })}
      </DataTable>

      <div className="container-fluid d-flex justify-center align-center flex-wrap">
        <button className="btn btn-outline-primary m-2">Add Attendee</button>
        <button className="btn btn-outline-primary m-2">Back to home</button>
        <button className="btn btn-outline-primary m-2">Scan</button>
      </div>

      <hr />

      <H4>Tickets Logged:</H4>

      <hr />

      <H4>Order Details:</H4>
      <SideBySide left="Event Name:" right="Adelaide Family Show" />
      <SideBySide left="Session:" right="18/10/2020 10:00AM - 01:00 PM" />
      <SideBySide
        left="Event Location:"
        right="Edwards Park Anzac Hwy, Adelaide SA 5000"
      />
      <SideBySide left="Order No:" right="4165441" />
      <SideBySide left="Date:" right="21/10/2020" />

      <div className="basic-form">
        <form>
          <div className="row">
            <div className="col-lg-4">
              <input
                type="text"
                className="form-control input-default my-3"
                placeholder="4 digits number"
              />
            </div>
            <div className="col-lg-6">
              <button className="btn btn-outline-primary my-3">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default OrderDetails;
