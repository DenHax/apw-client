import React from "react";
import "../../styles/Table.css";

const Table = ({ headers, data, renderRow }) => {
  return (
    <table className="ui-table">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>{data.map((item, index) => renderRow(item, index))}</tbody>
    </table>
  );
};

export default Table;
