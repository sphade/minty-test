import React from "react";
import Button from "./Button";
import Icon from '../assets/Icons/Vector.svg'

const Sidebar = () => {
    const main = [
        {
            name: 'overview',
            icon:Icon
      }
    ]; const payments = [
        {
            name: 'all payment',
            icon:Icon
      },
        {
            name: 'recurring payment',
            icon:Icon
      },
        {
            name: 'all payment',
            icon:Icon
      },
    ];
  return (
    <div className="h-screen w-[260px] pt-[100px] sticky top-0 left-0 bg-white border">
      <div className=" pl-10 ">
        <Button>generate invoice</Button>
      </div>
      <div className="mt-[32px] text-sm text-primary">
        <div className="mb-9">
          <p className="px-10 mb-4">main</p>
          <div>
            <p className="flex items-center w-full bg-blue-100 py-2 border-l-4 px-10 border-blue-700 gap-3 ">
                          <img src={ Icon} alt="" />
              <span>overview</span>
            </p>
          </div>
        </div>
        <div className="mb-9">
          <p className="px-10 mb-4">main</p>
          <div>
            <p className="flex items-center w-full  py-2 border-l-4 px-10  gap-3 ">
              <span>icon</span>
              <span>overview</span>
            </p>{" "}
            <p className="flex items-center w-full  py-2 border-l-4 px-10  gap-3 ">
              <span>icon</span>
              <span>overview</span>
            </p>{" "}
            <p className="flex items-center w-full  py-2 border-l-4 px-10  gap-3 ">
              <span>icon</span>
              <span>overview</span>
            </p>{" "}
            <p className="flex items-center w-full  py-2 border-l-4 px-10  gap-3 ">
              <span>icon</span>
              <span>overview</span>
            </p>{" "}
            <p className="flex items-center w-full  py-2 border-l-4 px-10  gap-3 ">
              <span>icon</span>
              <span>overview</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
