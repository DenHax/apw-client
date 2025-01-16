import React from "react";
import Table from "../UI/Table";
import Button from "../UI/Button";

const EntityTable = ({ data, onDelete, onEdit }) => {
  const headers = Object.keys(data[0] || {}).concat("Действия");

  const renderRow = (item, index) => (
    <tr key={index}>
      {Object.values(item).map((value, idx) => (
        <td key={idx}>{value}</td>
      ))}
      <td>
        <Button onClick={() => onEdit(item)}>Изменить</Button>
        <Button onClick={() => onDelete(item)}>Удалить</Button>
      </td>
    </tr>
  );

  return <Table headers={headers} data={data} renderRow={renderRow} />;
};

export default EntityTable;
