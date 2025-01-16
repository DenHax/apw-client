import React, { useState, useEffect } from "react";
import { Table, Button } from "antd";
import axios from "axios";
import EditModal from "./EditModal";

const EmployeeTable = () => {
  const [data, setData] = useState([]);
  const [subsystems, setSubsystems] = useState([]);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    fetchData();
    fetchSubsystems();
  }, []);

  const apiUrl = "http://localhost:8080/api";

  const fetchData = async () => {
    const response = await axios.get(`${apiUrl}/employee/`);
    setData(response.data);
  };

  const fetchSubsystems = async () => {
    const response = await axios.get(`${apiUrl}/subsystem/`);
    setSubsystems(response.data);
  };

  const handleUpdate = async (values) => {
    await axios.put(`${apiUrl}/employee/${selectedEmployee.id}`, values);
    fetchData();
  };

  const columns = [
    {
      title: "ФИО",
      key: "fullname",
      render: (_, record) =>
        `${record.surname} ${record.firstname} ${record.lastname || ""}`,
    },
    { title: "Должность", dataIndex: "title", key: "title" },
    { title: "Телефон", dataIndex: "phone", key: "phone" },
    {
      title: "Действия",
      key: "actions",
      render: (_, record) => (
        <Button
          onClick={() => {
            setSelectedEmployee(record);
            setIsEditModalVisible(true);
          }}
        >
          Обновить
        </Button>
      ),
    },
  ];

  return (
    <div>
      <Table dataSource={data} columns={columns} rowKey="id" />
      <EditModal
        visible={isEditModalVisible}
        onCancel={() => setIsEditModalVisible(false)}
        onOk={handleUpdate}
        employee={selectedEmployee}
        subsystems={subsystems}
      />
    </div>
  );
};

export default EmployeeTable;
