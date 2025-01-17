import React from "react";
import { Modal, Form, Select } from "antd";
import { useState } from "react";
import moment from "moment";

const { Option } = Select;

const AddUploadModal = ({
  visible,
  onCancel,
  onOk,
  subsystems,
  employees,
  fuelRoads,
}) => {
  const [form] = Form.useForm();
  const [curDate, setCurDate] = useState(new Date());

  setInterval(() => setCurDate(new Date(), 1000));

  const handleOk = () => {
    form.validateFields().then((values) => {
      values.load_date = moment().format("YYYY-MM-DDTHH:mm:ssZ");
      values.fuel_road_number = Number(values.fuel_road_number);
      onOk(values);
      form.resetFields();
    });
  };

  return (
    <Modal
      title="Добавить установку"
      open={visible}
      onOk={handleOk}
      onCancel={onCancel}
    >
      <Form form={form} layout="vertical">
        <Form.Item name="load_date" label="Дата установки">
          {curDate.toLocaleTimeString()}
        </Form.Item>
        <Form.Item
          name="subsystem_id"
          label="Реактор"
          rules={[{ required: true }]}
        >
          <Select>
            {subsystems.map((subsystem, index) => (
              <Option
                key={subsystem.subsystemId}
                value={subsystem.subsystem_id}
              >
                Реактор{index + 1}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="employee_id"
          label="Сотрудник"
          rules={[{ required: true }]}
        >
          <Select>
            {employees.map((employee) => (
              <Option key={employee.employee_id} value={employee.employee_id}>
                {employee.surname} {employee.firstname}{" "}
                {employee.lastname || ""}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="fuel_road_number"
          label="ТВЭЛ"
          rules={[{ required: true }]}
        >
          <Select>
            {fuelRoads.map((fuelRoad, index) => (
              <Option
                key={fuelRoad.fuel_road_number}
                value={fuelRoad.feul_road_number}
              >
                ТВЭЛ{index + 1}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddUploadModal;
