import { useState, useEffect } from "react";
import SelectField from "../Select/SelectField";
import { Form } from "antd";
import { Input } from "antd";

function EditEmployeeForm({ form, subsystems, employee }) {
  return (
    <Form
      form={form}
      layout="vertical"
      //initialValues={{
      //  firstname: employee.firstname,
      //  surname: employee.surname,
      //  lastname: employee.lastname || "",
      //  phone: employee.phone,
      //  subsystem_id: `Реактор#${
      //    subsystems.findIndex(
      //      (s) => s.subsystem_id === employee.subsystem_id,
      //    ) + 1
      //  }`,
      //}}
    >
      <Form.Item name="firstname" label="Имя">
        <Input />
      </Form.Item>
      <Form.Item name="surname" label="Фамилия">
        <Input />
      </Form.Item>
      <Form.Item name="lastname" label="Отчество">
        <Input />
      </Form.Item>
      <Form.Item name="phone" label="Телефон">
        <Input />
      </Form.Item>
      <SelectField
        name="subsystem_id"
        label="Реактор"
        options={subsystems.map((subsystem) => ({
          value: subsystem.subsystem_id,
          label: `Реактор#${subsystems.findIndex((s) => s.subsystem_id === subsystem.subsystem_id) + 1}`,
        }))}
      />
    </Form>
  );
}

export default EditEmployeeForm;
