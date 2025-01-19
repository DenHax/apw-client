import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import EntityTable from "../../Table/Table";
import AddUploadModal from "./AddUploadModal";
import { Button } from "antd";
import { Form } from "antd";
import { Popconfirm } from "antd";

import ReportButton from "./ReportButton";
import ReportTable from "./ReportTable";

const UploadEntity = () => {
  const [uploads, setUploads] = useState([]);
  const [subsystems, setSubsystems] = useState([]);
  const [fuelRoads, setFuelRoads] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [reportData, setReportData] = useState([]);
  useEffect(() => {
    fetchUpload();
    fetchSubsystem();
    fetchFuelRoad();
    fetchEmployee();
  }, []);

  const fetchUpload = async () => {
    const responseUrl = `/api/upload/`;
    const response = await axios.get(responseUrl);
    setUploads(response.data);
  };
  const fetchSubsystem = async () => {
    const responseUrl = `/api/subsystem/`;
    const response = await axios.get(responseUrl);
    setSubsystems(response.data);
  };
  const fetchFuelRoad = async () => {
    const responseUrl = `/api/fuel-road/`;
    const response = await axios.get(responseUrl);
    setFuelRoads(response.data);
  };
  const fetchEmployee = async () => {
    const responseUrl = `/api/employee/`;
    const response = await axios.get(responseUrl);
    setEmployees(response.data);
  };
  const handleAdd = async (values) => {
    await axios.post(`/api/upload/`, values, {
      headers: {
        "Content-Type": "application/json",
      },
    }),
      fetchUpload();
  };
  const handleDelete = async (upload_id) => {
    await axios.delete(`/api/upload/${upload_id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    }),
      fetchUpload();
  };

  const formatDate = (inputDate) => {
    const formattedDate = inputDate
      .replace("T", " ")
      .replace("Z", "")
      .split(".")[0];
    return formattedDate;
  };

  const columns = [
    {
      title: "Дата загрузки",
      dataIndex: "load_date",
      key: "loadDate",
      render: (_, record) => formatDate(record.load_date),
      sorter: (a, b) => new Date(a.load_date) - new Date(b.load_date),
    },
    {
      title: "Реактор",
      key: "subsystemId",
      render: (_, record) =>
        `Реактор#${subsystems.findIndex((s) => s.subsystem_id === record.subsystem_id) + 1}`,
      sorter: (a, b) => a.subsystem_id - b.subsystem_id,
    },
    {
      title: "Сотрудник",
      key: "employeeId",
      render: (_, record) => record.employee_full_name,
      onFilter: (value, record) =>
        record.employee_full_name.indexOf(value) === 0,
      sorter: (a, b) => {
        const lastNameA = a.employee_full_name.split(" ")[0].toLowerCase();
        const lastNameB = b.employee_full_name.split(" ")[0].toLowerCase();
        return lastNameA.localeCompare(lastNameB);
      },
      sortDirections: ["descend"],
    },
    {
      title: "ТВЭЛ",
      dataIndex: "fuel_road_number",
      key: "fuelRoadNumber",
      render: (_, record) =>
        `ТВЭЛ#${fuelRoads.findIndex((fr) => fr.fuel_road_number === record.fuel_road_number) + 1}`,
      sorter: (a, b) => a.fuel_road_number - b.fuel_road_number,
    },
    {
      title: "Действия",
      dataIndex: "operation",
      render: (_, record) =>
        uploads.length >= 1 ? (
          <Popconfirm
            title={
              "Точно хотите удалить запись за " + record.load_date.split("T")[0]
            }
            onConfirm={() => handleDelete(record.load_date)}
          >
            <a>Удалить</a>
          </Popconfirm>
        ) : null,
    },
  ];

  const [form] = Form.useForm();

  return (
    <>
      <Button
        type="primary"
        onClick={() => setIsAddModalVisible(true)}
        style={{ marginBottom: 16, width: 100 }}
      >
        Добавить
      </Button>
      <ReportButton onReportGenerated={setReportData} />
      {reportData.length > 0 && <ReportTable reportData={reportData} />}{" "}
      <EntityTable data={uploads} columns={columns} />
      <AddUploadModal
        visible={isAddModalVisible}
        onOk={handleAdd}
        onCancel={() => setIsAddModalVisible(false)}
        form={form}
        subsystems={subsystems}
        employees={employees}
        fuelRoads={fuelRoads}
      />
    </>
  );
};

export default UploadEntity;
