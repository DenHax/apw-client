import { Table } from "antd";

const EntityTable = ({ data, columns }) => {
  return (
    <>
      <Table
        dataSource={data}
        columns={columns}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
    </>
  );
};

export default EntityTable;
