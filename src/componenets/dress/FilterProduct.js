import React, { useState } from "react";
import { productData } from "../home/product/ProductsData";
// import formatCurrency from "../../Util";

const FilterProduct = () => {
  const [range, setRange] = useState(1500000);
  const [colorName, setcolorName] = useState("");
  console.log(colorName)
  // console.log(formatCurrency(range))
  const uniqueColors = new Set(productData.map((item) => item.color));
  return (
    <div>
      <div className="title-filter">
        <h3>دسته ها</h3>
        <p>تی شرت و پولوشرت</p>
        <p className="border-b-2 pb-4">پالتو و کاپشن</p>
      </div>
      <div className="price-filter">
        <h3 className="mt-3">قیمت</h3>
        <input
          onChange={(e) => setRange(e.target.value)}
          type="range"
          value={range}
          min="0"
          max="1500000"
          id="range"
          name="range"
        />
        <p className="number border-b-2 pb-4" htmlFor="range">
          0 تومان - {range} تومان
        </p>
      </div>
      <div className="color-filter my-2">
        <h3 className="mb-3">رنگ : {colorName}</h3>
        <div className="flex gap-x-4">
        {Array.from(uniqueColors).map((item, index) => (
          <div
          key={index}
          onClick={()=>setcolorName()}
            className="w-[20px] h-[20px] rounded-full"
            style={{ backgroundColor: item }}
          ></div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default FilterProduct;
