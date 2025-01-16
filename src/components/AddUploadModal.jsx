import React from "react";
import { Modal, Form, Select } from "antd";

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

  const handleOk = () => {
    form.validateFields().then((values) => {
      onOk(values);
      form.resetFields();
    });
  };

  return (
    <Modal
      title="Добавить установку"
      visible={visible}
      onOk={handleOk}
      onCancel={onCancel}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="subsystem_id"
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
                value={fuelRoad.fuel_road_number}
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
