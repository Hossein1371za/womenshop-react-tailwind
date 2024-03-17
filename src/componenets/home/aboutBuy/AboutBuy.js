import React from "react";
import { aboutBuyData } from "./AboutBuyData";

const AboutBuy = () => {
  return (
    <div className="mt-[80px] bg-gray-100">
      <div className="container mx-auto p-10">
        <div className="flex flex-col md:flex-row items-center justify-around">
          {aboutBuyData.map((item, index) => {
            return (
              <div key={index} className="flex flex-col items-center gap-4 max-w-[350px]">
                <div className="text-6xl text-red-400">{item.icon}</div>
                <h3 className="h3 font-bold">{item.title}</h3>
                <p className="text-center leading-8">{item.description}</p>
                <button className="bg-blue-500 p-3 text-white rounded-xl mt-2 hover:bg-blue-600 transition-all duration-300">بیشتر بدانید</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutBuy;
