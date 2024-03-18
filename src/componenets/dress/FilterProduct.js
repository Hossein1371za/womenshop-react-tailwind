import React, { useState } from "react";

const FilterProduct = () => {
  const [range, setRange] = useState(0);
  console.log(range);
  return (
    <div>
      <div className="title-filter">
        <h3>دسته ها</h3>
        <p>تی شرت و پولوشرت</p>
        <p className="border-b-2 pb-4">پالتو و کاپشن</p>
      </div>
      <div className="price-filter">
        <h3>قیمت</h3>
        <input
          onChange={(e) => setRange(e.target.value)}
          type="range"
          value="100"
          min="0"
          max="100"
          id="range"
          name="range"
        />
        <label htmlFor="range">{range}</label>
      </div>
    </div>
  );
};

export default FilterProduct;
