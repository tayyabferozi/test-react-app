import React, { Fragment, useEffect, useRef } from "react";
import $ from "jquery";

import H4 from "../../components/Headings/H4";

$.DataTable = require("datatables.net");

const DataTable = (props) => {
  const { heading, titles = [], children, style, ...rest } = props;
  const table = useRef(null);
  const tableContainer = useRef(null);

  useEffect(() => {
    if (children) {
      $(table.current).DataTable();
    }
  }, [table, children]);

  return (
    <Fragment>
      <div className="table-responsive">
        {heading && <H4>{heading}</H4>}
        <div ref={tableContainer}></div>
        <table
          {...rest}
          ref={table}
          id=""
          className="display"
          style={{ minWidth: "845px" }}
        >
          {children ? (
            <Fragment>
              <thead>
                <tr>
                  <th style={{ width: "80px" }}>#</th>
                  {titles.map((title) => {
                    return (
                      <th key={Math.random()}>
                        <strong>{title}</strong>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>{children}</tbody>
            </Fragment>
          ) : (
            <tbody>
              <tr
                style={{
                  textAlign: "center",
                }}
              >
                <td className="p-3">No records to show</td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </Fragment>
  );
};

export default DataTable;
