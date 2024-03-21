import React from "react";
import Header from "./componenets/header/Header";
import Home from "./componenets/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./componenets/footer/Footer";
import Dress from "./componenets/dress/Dress";
import Details from "./componenets/Details";

const Core = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dress" element={<Dress />} />
        <Route path="/products/:id" element={<Details />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default Core;
