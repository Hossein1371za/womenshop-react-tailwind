import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu4Fill, RiCloseFill, RiShoppingCartFill } from "react-icons/ri";
import Nav from "./Nav";
import NavMobile from "./NavMobile";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="relative p-6 bg-gray-200 shadow-xl">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center">
          {/* Toggle menu */}
          <div
            onClick={() => setOpenMenu(!openMenu)}
            className="text-3xl lg:hidden"
          >
            {openMenu ? <RiCloseFill /> : <RiMenu4Fill />}
          </div>
          {/* Logo */}
          <Link to="/" className="flex items-center justify-center gap-x-4">
            <img
              className="w-[54px] h-[54px] text-primary"
              src="assets/image/logo.svg"
              alt="Logo"
            />
            <h1 className="text-xl font-semibold">مزون زنانه</h1>
          </Link>

          {/* Responsive menu */}
          <div
            className={`${
              openMenu ? "right-0" : "-right-full"
            } absolute top-[100%] h-screen w-full bg-white transition-all duration-300 lg:hidden`}
          >
            <NavMobile />
          </div>
          <div className="hidden lg:block">
            <Nav />
          </div>
          {/* shop box */}
          <div className="relative">
            <div className="absolute h-[20px] w-[20px] rounded-full bg-red-500 left-6 bottom-5 flex items-center justify-center">
              <span className="number text-white">0</span>
            </div>
            <RiShoppingCartFill className="text-3xl text-primary" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
