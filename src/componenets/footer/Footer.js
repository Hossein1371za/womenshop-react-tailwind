import React from "react";
import { Link } from "react-router-dom";
import { FaLocationPin, FaPhone,FaInstagram,FaLinkedin,FaYoutube,FaTelegram } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="mt-[80px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="p-3 max-w-[400px]">
            <h3 className="h3 text-center mb-4 text-pink-500 border-b-2 pb-3">
              اطلاعات
            </h3>
            <ul className="flex flex-col items-center gap-y-4">
              <li>
                <Link to="/contact">فروشگاه های ما</Link>
              </li>
              <li>
                <Link to="/contact">تماس با ما</Link>
              </li>
              <li>
                <Link to="/contact">شرایط و قوانین استفاده</Link>
              </li>
              <li>
                <Link to="/contact">درباره ما</Link>
              </li>
              <li>
                <Link to="/contact">وبلاگ</Link>
              </li>
            </ul>
          </div>
          <div className="p-3 max-w-[400px]">
            <h3 className="h3 text-center mb-4 text-pink-500 border-b-2 pb-3">
              دسته ها
            </h3>
            <ul className="flex flex-col items-center gap-y-4">
              <li>
                <Link to="/contact">لباس زنانه</Link>
              </li>
              <li>
                <Link to="/contact">کیف زنانه</Link>
              </li>
              <li>
                <Link to="/contact">کفش زنانه</Link>
              </li>
              <li>
                <Link to="/contact">اکسسوری زنانه</Link>
              </li>
            </ul>
          </div>
          <div className="p-3 max-w-[400px]">
            <h3 className="h3 text-center mb-4 text-pink-500 border-b-2 pb-3">
              اطلاعات فروشگاه
            </h3>
            <div className="flex flex-col gap-y-3">
              <div className="flex items-center justify-center gap-x-3">
                <p>
                  <FaLocationPin className="text-2xl text-pink-500"/>
                </p>
                <p>آدرس مورد نظر شما</p>
              </div>
              <div className="flex items-center justify-center gap-x-3">
                <p>
                  <FaPhone className="text-2xl text-pink-500"/>
                </p>
                <p className="number">021-12345678</p>
              </div>
              <div className="flex items-center justify-center gap-x-3">
                <p>
                  <LuMail className="text-2xl text-pink-500"/>
                </p>
                <p className="number">youremail@gmail.com</p>
              </div>
              <div className="flex items-center mt-4 gap-x-3 mx-auto">
                    <FaInstagram size={30} className="hover:text-pink-500"/>
                    <FaLinkedin size={30} className="hover:text-pink-500"/>
                    <FaTelegram size={30} className="hover:text-pink-500"/>
                    <FaYoutube size={30} className="hover:text-pink-500"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
