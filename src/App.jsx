import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import Navbar from "./components/Navbar";
import EmployeeTable from "./components/EmployeeTable";
//import SubsystemTable from "./components/SubsystemTable";
//import FuelRoadTable from "./components/FuelRoadTable";
import UploadTable from "./components/UploadTable";

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
              <Route path="/employees" element={<EmployeeTable />} />
              <Route path="/uploads" element={<UploadTable />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
