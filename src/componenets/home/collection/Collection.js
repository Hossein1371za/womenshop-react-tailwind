import React from "react";
import { collectionData } from "./CollectionDate";

const Collection = () => {
  return (
    <div className="mx-auto container mt-[80px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {collectionData.map((item, index) => {
          return (
            <div key={index} className="border-2 shadow-xl">
              <div className="p-5 flex flex-col items-center  gap-y-6 mt-3">
                <img src={item.img} alt="." />
                  <h3 className="font-bold h3 mb-3">{item.title}</h3>
                  <p className="font-semibold mb-2">{item.description}</p>
                  <button className="bg-blue-500 text-white hover:bg-blue-600 p-3 rounded">
                    خرید کنید
                  </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Collection;
