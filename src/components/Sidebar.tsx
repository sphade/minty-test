import React from "react";
import Button from "./Button";
import Icon from "../assets/Icons/Vector.svg";

const Sidebar = () => {
  const main = [
    {
      name: "overview",
      icon: Icon,
    },
  ];
  const payments = [
    {
      name: "all payment",
      icon: Icon,
    },
    {
      name: "recurring payment",
      icon: Icon,
    },
    {
      name: "all payment",
      icon: Icon,
    },
    {
      name: "all payment",
      icon: Icon,
    },
  ];
  return (
    <div className="h-screen w-[260px] pt-[100px] sticky top-0 left-0 bg-white ">
      <div className=" pl-8 ">
        <Button>generate invoice</Button>
      </div>
      <div className="mt-[32px] text-xs text-primary">
        <div className="mb-9">
          <p className="px-10 mb-4">main</p>
          <div>
            <p className="flex items-center w-full bg-blue-100 py-2 border-l-4 px-10 border-blue-700 gap-3 ">
              <img src={Icon} alt="" />
              <span>overview</span>
            </p>
          </div>
        </div>
        <div className="mb-9">
          <p className="px-10 mb-4">payment</p>
          <div>
            {payments.map(({ icon, name }) => (
              <p className="flex items-center w-full cursor-pointer hover:bg-gray-200 transition-all  py-2 border-l-4 px-10  gap-3 ">
                <img src={icon} alt="" />

                <span>{name}</span>
              </p>
            ))}
          </div>
              </div>
              <div className="mb-9">
          <p className="px-10 mb-4">orders</p>
          <div>
            {payments.map(({ icon, name }) => (
              <p className="flex items-center w-full cursor-pointer hover:bg-gray-200 transition-all  py-2 border-l-4 px-10  gap-3 ">
                <img src={icon} alt="" />

                <span>{name}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
