import React, { useState } from "react";
import { Modal, Form, Input, Select } from "antd";

const AddModal = ({ visible, onCancel, onOk }) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    form.validateFields().then((values) => {
      onOk();
      form.resetFields();
    });
  };

  return (
    <Modal
      title="Добавить сотрудника"
      open={visible}
      onOk={handleOk}
      onCancel={onCancel}
    >
      <Form form={form} layout="vertical">
        <Form.Item name="fullname" label="ФИО" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="title" label="Должность" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="phone" label="Телефон" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddModal;
