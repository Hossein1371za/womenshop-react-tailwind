import React, { useState } from "react";
import { productData } from "../home/product/ProductsData";

const FilterProduct = () => {
  const [range, setRange] = useState(0);

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
        <p className="number border-b-2 pb-4" htmlFor="range">0 تومان - {range} تومان</p>
      </div>
      <div className="color-filter">
        <h3>رنگ</h3>

      </div>
    </div>
  );
};

export default FilterProduct;
