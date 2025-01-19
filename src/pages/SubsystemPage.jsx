import { Layout } from "antd";
import SubsystemEntity from "../components/Entities/Subsystem/SubsystemEntity";

const SubsystemPage = () => {
  return (
    <>
      <h1>Реакторы</h1>
      <Layout style={{ minHeight: "100vh" }}>
        <SubsystemEntity />
      </Layout>
    </>
  );
};

export default SubsystemPage;
