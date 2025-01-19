import { Layout } from "antd";
import FuelRoadEntity from "../components/Entities/FuelRoad/FuelRoadEntity";

const FuelRoadPage = () => {
  return (
    <>
      <h1>ТВЭЛы</h1>
      <Layout style={{ minHeight: "100vh" }}>
        <FuelRoadEntity />
      </Layout>
    </>
  );
};

export default FuelRoadPage;
