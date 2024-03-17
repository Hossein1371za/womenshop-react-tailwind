import React from "react";
import Header from "./componenets/header/Header";
import Home from "./componenets/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./componenets/footer/Footer";

const Core = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default Core;
