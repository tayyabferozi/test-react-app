import React from "react";

import { Dropdown } from "react-bootstrap";

const TableActions = (props) => {
  const { children } = props;

  return (
    <td>
      <Dropdown>
        <Dropdown.Toggle variant="warning" id="dropdown-basic">
          <svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <rect x="0" y="0" width="24" height="24" />
              <circle fill="#514e5f" cx="5" cy="12" r="2" />
              <circle fill="#514e5f" cx="12" cy="12" r="2" />
              <circle fill="#514e5f" cx="19" cy="12" r="2" />
            </g>
          </svg>
        </Dropdown.Toggle>

        <Dropdown.Menu>{children}</Dropdown.Menu>
      </Dropdown>
    </td>
  );
};

export default TableActions;
