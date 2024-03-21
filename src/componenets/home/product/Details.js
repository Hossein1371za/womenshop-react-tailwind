// Detail.js

import React, { useContext } from "react";
import { DataContext } from "../../../Context";
import formatCurrency from "../../../Util";

const Detail = () => {
  const value = useContext(DataContext);
  const product = value.product;
  // id:1,
  //       img:"/assets/image/products/product1.jpg",
  //       title:"کاپشن چرمی",
  //       price:570000,
  //       color:"#000",
  //       colorName:"مشکی",
  //       size:["sm","l","xl"],
  return (
    <div className="mt-[80px]">
      <div className="container mx-auto">
        <div className="flex flex-col">
          <img src={product.img} alt="" />
          <h3 className="text-center h3">{product.title}</h3>
          <div className="flex items-center justify-between w-full">
            <p>قیمت : {formatCurrency(product.price)} تومان</p>
            <p>رنگ موجود : {product.colorName}</p>
          </div>
          <div className="flex items-center justify-center gap-x-4">
            سایزهای موجود : 
            {product.size.map((size, index) => (
              <p className="text-black" key={index}>{size}</p>
            ))}
          </div>
          <button className="mx-auto bg-blue-500 text-white p-3  hover:bg-blue-600 rounded-lg">
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
