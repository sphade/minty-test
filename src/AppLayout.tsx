import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <Outlet />
      <div className="w-screen h-screen"></div>
      <div className="w-screen h-screen"></div>
      <div className="w-screen h-screen"></div>
      {/* <div className="w-full h-12 shadow-md sticky bottom-0 bg-white"></div> */}
    </div>
  );
};

export default AppLayout;
