import React, { useContext } from "react";
import { DataContext } from "../Context";
import formatCurrency from "../Util";
import { useParams } from "react-router-dom";

const Detail = () => {
  const value = useContext(DataContext);
  const { id } = useParams();
  const [products, setProducts] = value.products;
  const product = products.find((item) => item.id === id);
  console.log(products)
  console.log(product);
  console.log(id);

  return (
    <div className="my-[80px] mx-auto max-w-[500px] border-2 shadow-xl">
      <div className="container ">
        <div className="flex flex-col">
          <img src={product.img} alt="" />
          <h3 className="text-center h3 mt-4">{product.title}</h3>
          <div className="flex items-center justify-between w-full mt-3">
            <p className="number text-lg">
              قیمت : {formatCurrency(product.price)} تومان
            </p>
            <p className="text-lg font-bold">رنگ موجود : {product.colorName}</p>
          </div>
          <div className="flex items-center justify-center gap-x-4 mt-3 text-xl">
            سایزهای موجود :
            {product.size.map((size, index) => (
              <p className="text-black" key={index}>
                {size}
              </p>
            ))}
          </div>
          <button className="mx-auto my-4 bg-blue-500 text-white p-3  hover:bg-blue-600 rounded-lg">
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
