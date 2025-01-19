import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Menu theme="dark" mode="inline">
      <Menu.Item key="1">
        <Link to="/employees">Сотрудники</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/subsystems">Реакторы</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/fuel-roads">ТВЭЛы</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/uploads">Установки</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
