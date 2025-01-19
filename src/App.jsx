import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import Navbar from "./components/Navbar/Navside";
import UploadPage from "./pages/UploadPage";
import EmployeePage from "./pages/EmployeePage";
import FuelRoadPage from "./pages/FuelRoadPage";
import SubsystemPage from "./pages/SubsystemPage";

const { Content, Sider } = Layout;

const App = () => {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider>
          <Navbar />
        </Sider>
        <Layout>
          <Content style={{ padding: "24px" }}>
            <Routes>
              <Route path="/uploads" element={<UploadPage />} />
              <Route path="/employees" element={<EmployeePage />} />
              <Route path="/fuel-roads" element={<FuelRoadPage />} />
              <Route path="/subsystems" element={<SubsystemPage />} />
              <Route path="*" element={<UploadPage />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
//
