import { Button, Modal } from "antd";
import EditEmployeeForm from "../../Form/EditEmployeeForm";

function EditEmployeeModal({
  visible,
  onSave,
  onCancel,
  form,
  subsystems,
  employees,
  employee,
}) {
  const handleSave = () => {
    form
      .validateFields()
      .then((values) => {
        onSave({ ...employees, ...values });
        onCancel();
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };
  return (
    <Modal
      title="Редактирование сотрудника"
      open={visible}
      onCancel={onCancel}
      footer={[
        <Button key="back" onClick={onCancel}>
          Отмена
        </Button>,
        <Button key="submit" type="primary" onClick={handleSave}>
          Сохранить
        </Button>,
      ]}
    >
      <EditEmployeeForm
        form={form}
        subsystems={subsystems}
        employee={employee}
      />
    </Modal>
  );
}
export default EditEmployeeModal;
