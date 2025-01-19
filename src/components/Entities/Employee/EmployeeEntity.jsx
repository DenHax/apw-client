import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import EntityTable from "../../Table/Table";
import EditEmployeeModal from "./EditEmployeeModal";
import { Button } from "antd";
import { Form } from "antd";

const EmployeeEntity = () => {
  const [employees, setEmployees] = useState([]);
  const [subsystems, setSubsystems] = useState([]);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [foundEmployee, setFoundEmployee] = useState(null);
  useEffect(() => {
    fetchSubsystem();
    fetchEmployee();
  }, []);
  console.log(foundEmployee);
  const fetchSubsystem = async () => {
    const responseUrl = `/api/subsystem/`;
    const response = await axios.get(responseUrl);
    setSubsystems(response.data);
  };
  const fetchEmployee = async () => {
    const responseUrl = `/api/employee/`;
    const response = await axios.get(responseUrl);
    setEmployees(response.data);
  };
  const handleEdit = async (values) => {
    values.employee_id = foundEmployee.employee_id;
    console.log(values);
    await axios.put(
      `/api/employee/${values.employee_id}`,
      {
        surname: values.surname,
        fisrtname: values.firstname,
        lastname: values.lastname,
        subsystem_id: values.subsystem_id,
        phone: values.phone,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    ),
      setIsEditModalVisible(false);
    fetchEmployee();
  };

  const columns = [
    //{
    {
      title: "Фамилия",
      key: "employeeSurname",
      dataIndex: "surname",
      sorter: (a, b) => {
        const lastNameA = a.surname.toLowerCase();
        const lastNameB = b.surname.toLowerCase();
        return lastNameA.localeCompare(lastNameB);
      },
    },
    {
      title: "Имя",
      key: "employeeFirstname",
      dataIndex: "firstname",
      sorter: (a, b) => {
        const lastNameA = a.firstname.toLowerCase();
        const lastNameB = b.firstname.toLowerCase();
        return lastNameA.localeCompare(lastNameB);
      },
    },
    {
      title: "Отчество",
      key: "employeeLastname",
      dataIndex: "lastname",
      sorter: (a, b) => {
        const lastNameA = a.lastname ? a.lastname.toLowerCase() : "";
        const lastNameB = b.lastname ? b.lastname.toLowerCase() : "";
        return lastNameA.localeCompare(lastNameB);
      },
    },
    {
      title: "Должность",
      key: "employeeTitle",
      dataIndex: "title",
      //sorter: (a, b) => {
      //  const titleA = a.title ? a.title.toLowerCase() : "";
      //  const titleB = b.title ? b.title.toLowerCase() : "";
      //  return titleA.localeCompare(titleB);
      //},
    },
    {
      title: "Телефон",
      key: "employeePhone",
      dataIndex: "phone",
    },
    {
      title: "Реактор",
      key: "subsystemId",
      render: (_, record) =>
        `Реактор#${subsystems.findIndex((s) => s.subsystem_id === record.subsystem_id) + 1}`,
      sorter: (a, b) => a.subsystem_id - b.subsystem_id,
    },
    {
      title: "Действия",
      dataIndex: "operation",
      render: (_, record) =>
        employees.length >= 1 ? (
          <Button
            type="primary"
            onClick={() => {
              setIsEditModalVisible(true);
              setFoundEmployee(
                employees.find((emp) => emp.employee_id === record.employee_id),
              );
              console.log(record.employee_id);
            }}
          >
            Изменить
          </Button>
        ) : null,
    },
  ];
  const [form] = Form.useForm();

  return (
    <>
      <EntityTable data={employees} columns={columns} />
      <EditEmployeeModal
        visible={isEditModalVisible}
        onSave={handleEdit}
        onCancel={() => setIsEditModalVisible(false)}
        form={form}
        subsystems={subsystems}
        employees={employees}
        employee={foundEmployee}
      />
    </>
  );
};

export default EmployeeEntity;
