import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { useSelector } from 'react-redux';

import changeTitle from "../../utils/change-title";
import DataTable from "../../components/Tables/DataTable";
import FormButton from "../../components/Buttons/FormButton";
import FormGroup from "../../components/FormElements/FormGroup";
import H4 from "../../components/Headings/H4";
import Loader from "../../components/UI/Loader";
import TableActions from "../../components/Buttons/TableActions";

const Events = () => {
  const [eventsState, setEventsState] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    changeTitle("Events");
    axios.get("geteventslist").then((res) => {
      let convertedRes = JSON.parse(res.data);
      setEventsState(convertedRes);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <DataTable heading="Events" titles={["Name", "Location", "Action"]}>
          {eventsState.map((event, index) => {
            return (
              <tr key={Math.random()}>
                <td>{index + 1}</td>
                <td>{event.EventName}</td>
                <td>{event.EventLocation}</td>
                <td>
                  <TableActions>
                    <Link
                      to={`/price-list/${event.EventID}`}
                      className="dropdown-item"
                    >
                      Price List
                    </Link>
                    <Link
                      to={`/coupons/${event.EventID}`}
                      className="dropdown-item"
                    >
                      Coupons
                    </Link>
                    <Link
                      to={`/sessions/${event.EventID}`}
                      className="dropdown-item"
                    >
                      Sessions
                    </Link>
                  </TableActions>
                </td>
              </tr>
            );
          })}
        </DataTable>
      )}

      <hr />

      <H4>Create New Event</H4>

      <div className="basic-form">
        <form>
          <FormGroup label="Event Name *">
            <input
              type="text"
              className="form-control"
              placeholder="Event Name"
            />
          </FormGroup>
          <FormGroup label="Event Description *">
            <textarea
              name=""
              placeholder="Event Description"
              className="form-control"
              rows="4"
              id="comment"
            ></textarea>
          </FormGroup>
          <FormGroup label="Start Date/Time *">
            <input
              className="form-control input-limit-datepicker"
              type="datetime-local"
              name="daterange"
            />
          </FormGroup>
          <FormGroup label="End Date/Time *">
            <input
              className="form-control input-limit-datepicker"
              type="datetime-local"
              name="daterange"
            />
          </FormGroup>
          <FormGroup label="Event Location">
            <input
              type="email"
              className="form-control"
              placeholder="Event Location"
            />
          </FormGroup>
          <FormGroup label="Event Map">
            <input
              type="email"
              className="form-control"
              placeholder="Event Map"
            />
          </FormGroup>

          <FormGroup>
            <FormButton>Create</FormButton>
          </FormGroup>
        </form>
      </div>
    </div>
  );
};

export default Events;
