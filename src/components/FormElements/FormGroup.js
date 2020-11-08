import React from "react";

const FormGroup = (props) => {
  const { label, children, rootClassName } = props;

  return (
    <div className={`form-group row mx-auto ${rootClassName}`}>
      {label && (
        <label className="col-sm-3 col-form-label font-weight-500">
          {label}
        </label>
      )}
      <div className="col-sm-5">
        <div className="row text-center">
          <div className="col-xl-12">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default FormGroup;
