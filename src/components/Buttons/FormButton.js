import React from "react";

const FormButton = (props) => {
  const { children: title, className, ...rest } = props;

  return (
    <button
      {...rest}
      type="submit"
      className={`btn btn-outline-primary mt-3 ${className}`}
    >
      {title}
    </button>
  );
};

export default FormButton;
