import React from "react";
import { Modal } from "antd";

const DeleteModal = ({ visible, onCancel, onOk, upload }) => {
  return (
    <Modal
      title="Подтверждение удаления"
      open={visible}
      onOk={onOk}
      onCancel={onCancel}
      okText="Удалить"
      cancelText="Отмена"
      okButtonProps={{ danger: true }}
    >
      {upload && (
        <p>
          Вы уверены, что хотите удалить установку за{" "}
          {new Date(upload.loadDate).toLocaleString()}?
        </p>
      )}
    </Modal>
  );
};

export default DeleteModal;
