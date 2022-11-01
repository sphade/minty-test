import React from "react";

const GraphOverview = () => {
  return (
    <div className="w-full h-[326px]   grid grid-cols-3 gap-1">
      <div className=" col-span-2 px-9 py-7 bg-white">
        <div>
          <p className="capitalize text-[18px] text-secondary font-bold  ">
            Today: 5, Aug 2018
          </p>
        </div>
        <div></div>
      </div>
      <div className=" grid gap-1 grid-cols-1">
        
        <div className=" px-9 py-7 bg-white">
          <p className="capitalize text-[16px] text-secondary font-bold  ">
            orders
          </p>
          <div className="rounded-lg h-1 w-full bg-green-700"></div>
          <ul className="[&_li]:font-medium text-sm mt-3 space-y-2">
            <li>
              Pending Orders:
              <span className="text-yellow-400 font-bold">20</span>
            </li>
            <li>
              Reconcilled Orders:{" "}
              <span className="text-green-400 font-bold">80</span>
            </li>
            <li>
              Total Orders: <span className="text-blue-400 font-bold">100</span>
            </li>
          </ul>
        </div>  <div className=" px-9 py-7 bg-white">
          <p className="capitalize text-[16px] text-secondary font-bold  ">
            payments
          </p>
          <div className="rounded-lg h-1 w-full bg-green-700"></div>
          <ul className="[&_li]:font-medium text-sm mt-3 space-y-2">
            <li>
              Pending Orders:
              <span className="text-yellow-400 font-bold">20</span>
            </li>
            <li>
              Reconcilled Orders:{" "}
              <span className="text-green-400 font-bold">80</span>
            </li>
            <li>
              Total Orders: <span className="text-blue-400 font-bold">100</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GraphOverview;
