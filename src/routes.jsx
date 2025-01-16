import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EntityPage from "./pages/EntityPage";
//import NotFoundPage from "./pages/NotFoundPage";
//<Route path="*" element={<NotFoundPage />} />

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/employee" element={<EntityPage url="/employee/" />} />
        <Route path="/upload" element={<EntityPage url="/upload/" />} />
        <Route path="/subsystem" element={<EntityPage url="/subsystem/" />} />
        <Route path="/fuel-road" element={<EntityPage url="/fuel-road/" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
