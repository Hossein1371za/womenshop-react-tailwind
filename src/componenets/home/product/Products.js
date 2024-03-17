import React from "react";
import { productData } from "./ProductsData";

const Products = () => {
  return (
    <div className="container mx-auto mt-[80px]">
        <h2 className="h1 text-center mb-6">محصولات</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {productData.map((item, index) => {
          return (
            <div className="flex flex-col items-center gap-y-3 p-4 shadow-xl border-2 overflow-hidden" key={index}>
              <img className="cursor-pointer p-6 hover:scale-125 transition-all duration-300" src={item.img} alt="/" />
              <div className="flex items-center justify-between w-full gap-4">
                <p className="font-semibold text-lg">{item.title}</p>
                <p className="text-lg number">{item.price}</p>
              </div>
              <button className="bg-blue-500 text-white hover:bg-blue-600 rounded-lg p-2">افزودن به سبد خرید</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
