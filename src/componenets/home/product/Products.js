import React, { useContext } from "react";
import { DataContext } from "../../../Context";
import formatCurrency from "../../../Util";
import { Link } from "react-router-dom";

const Products = () => {
  const value = useContext(DataContext);
  const [products, setProducts] = value.products;

  return (
    <div className="container mx-auto mt-[80px]">
      <h2 className="h1 text-center mb-6">محصولات</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {products.map((item) => {
          return (
            <div
              className="flex flex-col items-center gap-y-3 p-4 shadow-xl border-2 overflow-hidden"
              key={item.id}
            >
              <img
                className="cursor-pointer p-6 hover:scale-110 transition-all duration-300"
                src={item.img}
                alt="/"
              />
              <div className="flex items-center justify-between w-full gap-4">
                <p className="font-semibold text-lg">{item.title}</p>
                <p className="text-lg number">{formatCurrency(item.price)}</p>
              </div>
              <div className="flex items-center justify-between w-full mt-3">
                <Link
                  className="bg-blue-500 text-white p-3 text-sm hover:text-white hover:bg-blue-600 rounded-lg"
                  to="/yourBox"
                >
                  افزودن به سبد خرید
                </Link>
                <Link
                  className="bg-blue-500 text-white p-3 text-sm hover:text-white hover:bg-blue-600 rounded-lg"
                  to= {`/products/${item.id}`}
                >
                  مشاهده جزییات
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
