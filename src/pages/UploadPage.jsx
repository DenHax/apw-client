import { Layout } from "antd";
import UploadEntity from "../components/Entities/Upload/UploadEntity";

const UploadPage = () => {
  return (
    <>
      <h1>Установки ТВЭЛов</h1>
      <Layout style={{ minHeight: "100vh" }}>
        <UploadEntity />
      </Layout>
    </>
  );
};

export default UploadPage;
