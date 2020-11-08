import React from "react";

const H4 = (props) => {
  const { children, ...rest } = props;

  return (
    <h4 {...rest}>
      <strong>{children}</strong>
    </h4>
  );
};

export default H4;
