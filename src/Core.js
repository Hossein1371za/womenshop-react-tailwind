import React from "react";
import Header from "./componenets/header/Header";
import Home from "./componenets/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Core = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Core;
