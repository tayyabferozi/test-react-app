import React, { Fragment, useEffect } from "react";

import "../../shared/js/custom.min.js";
import "../../shared/js/deznav-init.js";
import H4 from "../../components/Headings/H4.js";
import changeTitle from "../../utils/change-title.js";
import DataTable from "../../components/Tables/DataTable";
import FormGroup from "../../components/FormElements/FormGroup.js";
import FormButton from "../../components/Buttons/FormButton.js";
import Select from "../../components/FormElements/Select";

const Support = () => {
  const ticketsLeft = [{ type: "Kids under 2 (Free)", left: 2 }];
  const ticketsLogged = [
    { date: "27/10/20 09:54 AM", type: "Kids under 2 (Free)", attendees: 2 },
    { date: "27/10/20 09:55 AM", type: "Kids under 2 (Free)", attendees: 1 },
  ];

  useEffect(() => {
    changeTitle("Support");
  }, []);

  return (
    <Fragment>
      <div className="basic-form">
        <form>
          <H4>Support Details:</H4>
          <FormGroup>
            <Select
              options={[
                { text: "Please select a suitable subcategory", value: "" },
                { text: "Option 2", value: "lorem" },
              ]}
            />
          </FormGroup>

          <FormGroup>
            <FormButton>Create Support</FormButton>
          </FormGroup>
        </form>
      </div>

      <hr />

      <DataTable heading="Tickets Left:" titles={["Type", "Left"]}>
        {ticketsLeft.map((ticket, index) => {
          return (
            <tr key={Math.random()}>
              <td>
                <strong>{index + 1}</strong>
              </td>
              <td>{ticket.type}</td>
              <td>{ticket.left}</td>
            </tr>
          );
        })}
      </DataTable>

      <hr />

      <DataTable
        heading="Tickets Logged:"
        titles={["Date", "Type", "Attendees"]}
      >
        {ticketsLogged.map((ticket, index) => {
          return (
            <tr key={Math.random()}>
              <td>
                <strong>{index + 1}</strong>
              </td>
              <td>{ticket.date}</td>
              <td>{ticket.type}</td>
              <td>{ticket.attendees}</td>
            </tr>
          );
        })}
      </DataTable>
    </Fragment>
  );
};

export default Support;
