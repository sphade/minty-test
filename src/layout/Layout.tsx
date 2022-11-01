import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <div className='bg-[#F7F8FA]'>
      <Header />
          <main>
              <Sidebar/>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
