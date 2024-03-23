import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [type, setType] = useState("password");
  const handleClick = () => {
    if (type === "password") {
      setType("text");
    }
    if (type === "text") {
      setType("password");
    }
  };
  return (
    <div className="mt-[80px]">
      <h2 className="h2 text-center mb-8">ثبت نام</h2>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 items-center">
          <form className="flex flex-col gap-y-6 w-full mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <label>نام:</label>
              <input
                className="border-2 lg:w-[350px] p-2 rounded-xl"
                type="text"
                placeholder="نام..."
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <label className="w-[100px]">نام خانوادگی:</label>
              <input
                className="border-2 lg:w-[350px] p-2 rounded-xl"
                type="text"
                placeholder="نام خانوادگی ..."
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <label>ایمیل:</label>
              <input
                className="border-2 lg:w-[350px] p-2 rounded-xl"
                type="email"
                placeholder="ایمیل..."
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 relative">
              <label>پسوورد:</label>
              <input
                className="border-2 lg:w-[350px] p-2 rounded-xl"
                type={type}
                placeholder="پسوورد..."
              />
              <div
                className="absolute bottom-3 lg:bottom-none left-2 cursor-pointer"
                onClick={handleClick}
              >
                {type === "password" ? (
                  <FaEye size={20} color="gray" />
                ) : (
                  <FaEyeSlash size={20} color="gray" />
                )}
              </div>
            </div>
            <button className="bg-blue-500 text-white py-3 rounded-xl text-xl hover:bg-blue-600 transition-all duration-300">
              وارد شوید
            </button>
          </form>
          <div>
            <img src="/assets/image/register.svg" alt="login" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
