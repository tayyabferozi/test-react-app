import React, { Fragment } from "react";
import H4 from "../Headings/H4";

const BasicTable = (props) => {
  const { heading, titles = [], children, style, ...rest } = props;
  return (
    <Fragment>
      <div className="table-responsive">
        {heading && <H4>{heading}</H4>}
        <table {...rest} className="table table-responsive-md">
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

export default BasicTable;
