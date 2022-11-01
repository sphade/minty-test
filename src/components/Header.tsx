import React from "react";
import Input from "./Input";
import bell from "../assets/Icons/bell.svg";
import logo from "../assets/Icons/logo.svg";

const Header = () => {
  return (
      <header className="flex fixed top-0 left-0 w-screen z-10 bg-white px-10 py-[7px] items-center shadow-md justify-between">
          <img src={logo} alt="" />
      <Input />
      <ul className="flex items-center gap-10 text-sm capitalize text-primary">
        <li>support</li>
        <li>faq</li>
        <li>
          <img src={bell} alt="" className="w-4" />
        </li>
        <li className="flex gap-5">
          <p className="flex flex-col">
            <span className="text-right">hello</span>
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
