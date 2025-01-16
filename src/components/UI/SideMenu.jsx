import React, { useState } from "react";
import "../../styles/SideMenu.css";

const SideMenu = ({ isOpen, onClose, children }) => {
  return (
    <div className={`ui-side-menu ${isOpen ? "open" : ""}`}>
      <button className="ui-side-menu-close" onClick={onClose}>
        ×
      </button>
      {children}
    </div>
  );
};

export default SideMenu;
