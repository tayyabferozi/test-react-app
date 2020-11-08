import React from "react";

const SideBySide = (props) => {
  const { left, right } = props;

  return (
    <div className="row">
      <div className="col-3">
        <span className="font-weight-bold">{left}</span>
      </div>
      <div className="col">{right}</div>
    </div>
  );
};

export default SideBySide;
