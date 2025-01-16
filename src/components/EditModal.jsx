import React, { useEffect, useState } from "react";
import { Modal, Form, Input, Select } from "antd";
import axios from "axios";

const EditModal = ({ visible, onCancel, onOk, employee, subsystems }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (employee) {
      form.setFieldsValue({
        firstname: employee.firstname,
        surname: employee.surname,
        lastname: employee.lastname,
        phone: employee.phone,
        subsystemId: employee.subsystem_id,
      });
    }
  }, [employee, form]);

  const handleOk = () => {
    form.validateFields().then((values) => {
      onOk(values);
      form.resetFields();
    });
  };

  return (
    <Modal
      title="Обновить данные сотрудника"
      visible={visible}
      onOk={handleOk}
      onCancel={onCancel}
    >
      <Form form={form} layout="vertical">
        <Form.Item name="surname" label="Фамилия" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="firstname" label="Имя" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="lastname" label="Отчество">
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Телефон"
          rules={[
            { required: true },
            {
              pattern: /^\+?[0-9]{10,12}$/,
              message: "Введите корректный номер телефона",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="subsystemId"
          label="Реактор"
          rules={[{ required: true }]}
        >
          <Select>
            {subsystems.map((subsystem, index) => (
              <Option
                key={subsystem.subsystem_id}
                value={subsystem.subsystem_id}
              >
                Реактор{index + 1}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditModal;
