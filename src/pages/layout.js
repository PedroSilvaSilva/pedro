import React from "react";
import Sidebar from "../components/sidebar/sidebar";
import SidebarLeft from "../components/sidebar/sidebarleft";

const Layout = () => {
  return (
    <div className="widget-layout">
      <Sidebar />
      <SidebarLeft />
    </div>
  );
};

export default Layout;
