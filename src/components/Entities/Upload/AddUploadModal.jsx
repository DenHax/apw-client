import { Modal } from "antd";
import moment from "moment";
import AddUploadForm from "../../Form/AddUploadForm";

function AddUploadModal({
  visible,
  onOk,
  onCancel,
  form,
  subsystems,
  employees,
  fuelRoads,
}) {
  const handleOk = () => {
    form.validateFields().then((values) => {
      values.load_date = moment().format("YYYY-MM-DDTHH:mm:ssZ");
      values.fuel_road_number = Number(values.fuel_road_number);
      console.log(values);
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
      <AddUploadForm
        form={form}
        subsystems={subsystems}
        employees={employees}
        fuelRoads={fuelRoads}
      />
    </Modal>
  );
}
export default AddUploadModal;
