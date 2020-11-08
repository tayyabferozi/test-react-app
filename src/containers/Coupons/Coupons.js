import React, { useState, Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import changeTitle from "../../utils/change-title";
import H4 from "../../components/Headings/H4";
import DataTable from "../../components/Tables/DataTable";
import FormButton from "../../components/Buttons/FormButton";
import FormGroup from "../../components/FormElements/FormGroup";
import TableActions from "../../components/Buttons/TableActions";
import Loader from "../../components/UI/Loader";

const Coupons = () => {
  const [couponsState, setCouponsState] = useState([]);
  const { eventId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    changeTitle("Coupon");
    axios.get(`/geteventcouponslist/${eventId}`).then((res) => {
      const convertedRes = JSON.parse(res.data);
      setCouponsState(convertedRes);
      setIsLoading(false);
    });
  }, [eventId]);

  return (
    <Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <DataTable
          heading="Price List"
          titles={[
            "Coupon Code",
            "Discount Percentage",
            "Discount Amount",
            "Actions",
          ]}
        >
          {couponsState.map((item, index) => {
            return (
              <tr key={Math.random()}>
                <td>{index + 1}</td>
                <td>{item.Code}</td>
                <td>{item.DiscountPercentage}</td>
                <td>{item.DiscountAmount}</td>
                <TableActions titles={["Delete"]} />
              </tr>
            );
          })}
        </DataTable>
      )}

      <hr />

      <H4>Create New Coupon</H4>

      <div className="basic-form">
        <form>
          <FormGroup label="Coupen Code">
            <input
              type="name"
              className="form-control"
              placeholder="Coupon Code"
            />
          </FormGroup>

          <FormGroup label="Coupen Code">
            <select className="form-control">
              <option value="percentage">Percentage</option>
              <option value="amount">Amount</option>
            </select>
          </FormGroup>

          <FormGroup label="Amount / %age">
            <input
              type="number"
              className="form-control"
              placeholder="Amount / percentage"
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

export default Coupons;
