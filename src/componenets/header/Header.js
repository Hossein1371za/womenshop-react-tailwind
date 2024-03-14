import React from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <nav className="flex justify-between items-center">
          <div className="toggle-menu">
            <FaBars/>
          </div>
          <div className="logo">
            <img src="assets/image/logo.svg" alt="" />
            <h1>مزون زنانه</h1>
          </div>
          <div className="menu"></div>
          <div className="search"></div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
