import React from "react";
import Hero from "./Hero";
import Collection from "./collection/Collection"
import Products from "./product/Products";
import AboutBut from "./aboutBuy/AboutBuy";

const Home = () => {
  return (
    <>
      <Hero />
      <Collection />
      <Products/>
      <AboutBut />
    </>
  );
};

export default Home;
