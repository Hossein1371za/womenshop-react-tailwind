import React from "react";
import Hero from "./Hero";
import Collection from "./collection/Collection"
import Products from "../product/Products";

const Home = () => {
  return (
    <>
      <Hero />
      <Collection />
      <Products/>
    </>
  );
};

export default Home;
