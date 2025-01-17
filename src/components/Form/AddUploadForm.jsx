import { useState, useEffect } from "react";
import SelectField from "../Select/SelectField";
import { Form } from "antd";

function AddUploadForm({ form, subsystems, employees, fuelRoads }) {
  const [curDate, setCurDate] = useState(new Date());
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedSubsystem, setSelectedSubsystem] = useState(null);
  const [filteredEmployees, setFilteredEmployees] = useState(employees);
  const [filteredFuelRoads, setFilteredFuelRoads] = useState(fuelRoads);

  useEffect(() => {
    setInterval(() => setCurDate(new Date(), 1000));
  }, []);

  useEffect(() => {
    const filteredFuelRoads = fuelRoads
      .map((fuelRoad, index) => ({ ...fuelRoad, originalIndex: index }))
      .filter((fuelRoad) => fuelRoad.condition !== "плохое");

    setFilteredFuelRoads(filteredFuelRoads);
  }, [fuelRoads]);

  useEffect(() => {
    if (selectedEmployee) {
      // Автоматически выбираем реактор сотрудника
      const employeeSubsystem = subsystems.find(
        (subsystem) => subsystem.subsystem_id === selectedEmployee.subsystem_id,
      );
      if (employeeSubsystem) {
        setSelectedSubsystem(employeeSubsystem);
        form.setFieldsValue({ subsystem_id: employeeSubsystem.subsystem_id });
      }

      // Фильтруем сотрудников по выбранному реактору
      const filteredEmployees = employees.filter(
        (employee) => employee.subsystem_id === employeeSubsystem.subsystem_id,
      );
      setFilteredEmployees(filteredEmployees);
    }
  }, [selectedEmployee, form, subsystems, employees]); // Зависимости от selectedEmployee, form, subsystems, employees

  useEffect(() => {
    if (selectedSubsystem) {
      // Фильтруем сотрудников по выбранному реактору
      const filteredEmployees = employees.filter(
        (employee) => employee.subsystem_id === selectedSubsystem.subsystem_id,
      );
      setFilteredEmployees(filteredEmployees);
    }
  }, [selectedSubsystem, employees]); // Зависимости от selectedSubsystem и employees

  const handleEmployeeChange = (value) => {
    const employee = employees.find((emp) => emp.employee_id === value);
    setSelectedEmployee(employee);
  };

  const handleSubsystemChange = (value) => {
    const subsystem = subsystems.find((sub) => sub.subsystem_id === value);
    setSelectedSubsystem(subsystem);
  };

  return (
    <Form form={form} layout="vertical">
      <Form.Item name="load_date" label="Дата установки">
        {curDate.toLocaleTimeString()}
      </Form.Item>
      <SelectField
        name="subsystem_id"
        label="Реактор"
        rules={[{ required: true }]}
        options={subsystems.map((subsystem) => ({
          value: subsystem.subsystem_id,
          label: `Реактор#${subsystem.subsystem_id}, статус: ${subsystem.status}`,
        }))}
        onChange={handleSubsystemChange}
      />
      <SelectField
        name="employee_id"
        label="Сотрудник"
        rules={[{ required: true }]}
        options={filteredEmployees.map((employee) => ({
          value: employee.employee_id,
          label: `${employee.surname} ${employee.firstname} ${employee.lastname || ""}`,
        }))}
        onChange={handleEmployeeChange}
      />
      <SelectField
        name="fuel_road_number"
        label="ТВЭЛ"
        rules={[{ required: true }]}
        options={filteredFuelRoads.map((fuelRoad) => ({
          value: fuelRoad.fuel_road_number,
          label: `ТВЭЛ#${fuelRoad.originalIndex + 1}, состояние ${fuelRoad.condition}`,
        }))}
      />
    </Form>
  );
}

export default AddUploadForm;
