import { Layout } from "antd";
import EmployeeEntity from "../components/Entities/Employee/EmployeeEntity";

const EmployeePage = () => {
  return (
    <>
      <h1>Сотрудники</h1>
      <Layout style={{ minHeight: "100vh" }}>
        <EmployeeEntity />
      </Layout>
    </>
  );
};

export default EmployeePage;
