import React from "react";
import Header from "./componenets/header/Header";
import Home from "./componenets/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./componenets/footer/Footer";
import Dress from "./componenets/dress/Dress";
import Details from "./componenets/Details";
import Purse from "./componenets/purse/Purse";
import Shoes from "./componenets/shoes/Shoes";
import Accessory from "./componenets/accessory/Accessory";

const Core = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dress" element={<Dress />} />
        <Route path="/products/:id" element={<Details />} />
        <Route path="/purse" element={<Purse />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/accessory" element={<Accessory />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default Core;
