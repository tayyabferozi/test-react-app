import React, { useEffect } from "react";

import FormButton from "../../components/Buttons/FormButton";
import FormGroup from "../../components/FormElements/FormGroup";
import changeTitle from "../../utils/change-title";
import Select from "../../components/FormElements/Select";

const CreateNewSupport = () => {
  useEffect(() => {
    changeTitle("Create New Support");
  }, []);

  return (
    <div>
      <div className="basic-form">
        <form>
          <FormGroup label="Support Category *">
            <Select
              options={[
                { text: "Please select a suitable subcategory", value: "" },
                { text: "Option 2", value: "lorem" },
              ]}
            />
          </FormGroup>

          <FormGroup label="Name *">
            <input type="name" className="form-control" placeholder="Name" />
          </FormGroup>

          <FormGroup label="Email *">
            <input type="email" className="form-control" placeholder="Email" />
          </FormGroup>

          <FormGroup label="Phone *">
            <input type="phone" className="form-control" placeholder="Phone" />
          </FormGroup>

          <FormGroup label="Message *">
            <textarea
              name="message"
              className="form-control"
              rows="4"
              id="comment"
              placeholder="Message"
            ></textarea>
          </FormGroup>

          <FormGroup>
            <FormButton>Add Support</FormButton>
          </FormGroup>
        </form>
      </div>
    </div>
  );
};

export default CreateNewSupport;
