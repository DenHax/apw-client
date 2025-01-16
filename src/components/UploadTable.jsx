import React, { useState, useEffect } from "react";
import { Table, Button, Select, Space } from "antd";
import axios from "axios";
import DeleteModal from "./DeleteModal";
import AddUploadModal from "./AddUploadModal";

const { Option } = Select;

const UploadTable = () => {
  const [data, setData] = useState([]);
  const [subsystems, setSubsystems] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [fuelRoads, setFuelRoads] = useState([]);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [selectedUpload, setSelectedUpload] = useState(null);

  useEffect(() => {
    fetchData();
    fetchSubsystems();
    fetchEmployees();
    fetchFuelRoads();
  }, []);

  const apiUrl = "http://localhost:8080/api";

  const fetchData = async () => {
    const response = await axios.get(`${apiUrl}/upload/`);
    setData(response.data);
  };

  const fetchSubsystems = async () => {
    const response = await axios.get(`${apiUrl}/subsystem/`);
    setSubsystems(response.data);
  };

  const fetchEmployees = async () => {
    const response = await axios.get(`${apiUrl}/employee/`);
    setEmployees(response.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${apiUrl}/upload/${id}`);
    fetchData();
  };

  const fetchFuelRoads = async () => {
    const response = await axios.get(`${apiUrl}/fuel-road/`);
    setFuelRoads(response.data);
  };

  const handleAdd = async (values) => {
    await axios.post(`${apiUrl}/upload/`, values);
    fetchData();
  };

  const columns = [
    { title: "Дата загрузки", dataIndex: "load_date", key: "load_date" },
    {
      title: "Реактор",
      key: "subsystem",
      render: (_, record) =>
        `Реактор${subsystems.findIndex((s) => s.subsystem_id === record.subsystem_id) + 1}`,
    },
    {
      title: "Сотрудник",
      key: "employee",
      render: (_, record) => {
        const employee = employees.find(
          (em) => em.employee_id === record.employee_id,
        );
        return `${employee.surname} ${employee.firstname} ${employee.lastname || ""}`;
      },
    },
    {
      title: "ТВЭЛ",
      key: "fuelRoad",
      render: (_, record) =>
        `ТВЭЛ${fuelRoads.findIndex((f) => f.fuel_road_number === record.fuel_road_number) + 1}`,
    },
    {
      title: "Действия",
      key: "actions",
      render: (_, record) => (
        <Button
          danger
          onClick={() => {
            setSelectedUpload(record);
            setIsDeleteModalVisible(true);
          }}
        >
          Удалить
        </Button>
      ),
    },
  ];

  return (
    <div>
      <Button
        type="primary"
        onClick={() => setIsAddModalVisible(true)}
        style={{ marginBottom: 16 }}
      >
        Добавить
      </Button>
      <Table dataSource={data} columns={columns} rowKey="id" />
      <DeleteModal
        visible={isDeleteModalVisible}
        onCancel={() => setIsDeleteModalVisible(false)}
        onOk={() => {
          handleDelete(selectedUpload.load_date);
          setIsDeleteModalVisible(false);
        }}
        upload={selectedUpload}
      />
      <AddUploadModal
        visible={isAddModalVisible}
        onCancel={() => setIsAddModalVisible(false)}
        onOk={handleAdd}
        subsystems={subsystems}
        employees={employees}
        fuelRoads={fuelRoads}
      />
    </div>
  );
};

export default UploadTable;
