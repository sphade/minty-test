import React from "react";
import Input from "./Input";
import bell from "../assets/Icons/bell.svg";
import logo from "../assets/Icons/logo.svg";

const Header = () => {
  return (
      <header className="flex z-10 bg-white px-[80px] py-[7px] items-center shadow justify-between">
          <img src={logo} alt="" />
      <Input />
      <ul className="flex items-center gap-10">
        <li>support</li>
        <li>faq</li>
        <li>
          <img src={bell} alt="" className="w-4" />
        </li>
        <li className="flex gap-5">
          <p className="flex flex-col">
            <span>hello</span>
            <span>adewaleke ojo</span>
          </p>
          <img
            src=""
            alt=""
            className="w-[50px] h-[50px] rounded-full bg-gray-400"
          />
        </li>
      </ul>
    </header>
  );
};

export default Header;
