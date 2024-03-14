import React from "react";
import {Link} from "react-router-dom"
import { FaBars } from "react-icons/fa";
import { headerData } from "./Headerdata";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <nav className="flex justify-between items-center">
          <div className="lg:hidden cursor-pointer text-3xl">
            <FaBars />
          </div>
          <div className="flex items-center justify-center">
            <img
              className="w-[50px] h-[50px]"
              src="assets/image/logo.svg"
              alt=""
            />
            <h1>مزون زنانه</h1>
          </div>
          <div className="fixed w-full h-0 ">
            {headerData.map((item, index) => (
                <ul key={index}>
                  <li>
                  <Link to={item.href}>{item.name}</Link>
                  </li>
                </ul>
            ))}
          </div>
          <div className="search"></div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
