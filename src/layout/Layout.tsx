import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <div className='bg-[#F7F8FA] font-segoe'>
      <Header />
          <main className='flex gap-[30px]'>
              <Sidebar />
              <main className=' flex-1 mt-[97px] border mr-[20px]'>
                  
        <Outlet />
              </main>
      </main>
    </div>
  );
};

export default Layout;
