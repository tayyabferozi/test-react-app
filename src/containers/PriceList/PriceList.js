import React, { useState, Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

import changeTitle from "../../utils/change-title";
import FormButton from "../../components/Buttons/FormButton";
import FormGroup from "../../components/FormElements/FormGroup";
import DataTable from "../../components/Tables/DataTable";
import H4 from "../../components/Headings/H4";
import TableActions from "../../components/Buttons/TableActions";
import Loader from "../../components/UI/Loader";

const PriceList = () => {
  const [itemsState, setItemsState] = useState([]);
  const { eventId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    changeTitle("Price List");
    console.log(eventId);
    axios.get(`/geteventitemslist/${eventId}`).then((res) => {
      const convertedRes = JSON.parse(res.data);
      setItemsState(convertedRes);
      setIsLoading(false);
    });
  }, [eventId]);

  return (
    <Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <DataTable heading="Price List" titles={["Name", "Price", "Action"]}>
          {itemsState.map((item, index) => {
            return (
              <tr key={Math.random()}>
                <td>{index + 1}</td>
                <td>{item.EventItemName}</td>
                <td>{item.EventItemPrice}</td>
                <TableActions>
                  <Link to={`/`} className="dropdown-item">
                    Delete
                  </Link>
                </TableActions>
              </tr>
            );
          })}
        </DataTable>
      )}

      <hr />

      <H4>Create New Event Item</H4>

      <div className="basic-form">
        <form>
          <FormGroup label="Event Item Name *">
            <input
              type="name"
              className="form-control"
              placeholder="Event Item Name"
            />
          </FormGroup>

          <FormGroup label="Event Item Price *">
            <input
              type="number"
              className="form-control"
              placeholder="Event Item Price"
            />
          </FormGroup>
          <FormGroup>
            <FormButton>Add Event Item</FormButton>
          </FormGroup>
        </form>
      </div>
    </Fragment>
  );
};

export default PriceList;
