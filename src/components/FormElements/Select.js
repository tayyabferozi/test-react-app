import React from "react";

const Select = (props) => {
  const { options } = props;

  return (
    <select className="form-control">
      {options.map((el) => (
        <option key={el.value} value={el.value}>
          {el.text}
        </option>
      ))}
    </select>
  );
};

export default Select;
