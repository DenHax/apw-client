import { Modal } from "antd";
import AddUploadForm from "../../Form/AddUploadForm";
//import moment from "moment";

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
      values.load_date = new Date().toISOString();
      //moment()
      //.format("YYYY-MM-DDTHH:mm:ss.SSS")
      //.replace(".", "Z")
      //.split("Z")[0];
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
