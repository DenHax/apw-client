import React, { useState } from "react";
import SideMenu from "./components/UI/SideMenu";
import AppRoutes from "./routes";
import "./styles/App.css";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="app">
        <SideMenu isOpen={isMenuOpen} onClose={toggleMenu}></SideMenu>
        <button className="burger-menu" onClick={toggleMenu}>
          ☰
        </button>
        <AppRoutes />
      </div>
    </>
  );
};

export default App;
