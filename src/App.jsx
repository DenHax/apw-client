import React from "react";
import { Layout } from "antd";
import UploadEntity from "./components/Entities/Upload/UploadEntity";

const App = () => {
  return (
    <>
      <h1>APW client</h1>
      <Layout style={{ minHeight: "100vh" }}>
        <UploadEntity />
      </Layout>
    </>
  );
};

export default App;
