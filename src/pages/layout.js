import React from "react";
import Sidebar from "../components/sidebar/sidebar";
import SidebarLeft from "../components/sidebar/sidebarleft";
import Card from "../components/card/card";
import Header from "../components/header/header";

const Layout = () => {
  return (
    <div className="widget-layout">
      <Sidebar />
      <Header />

      <SidebarLeft />
    </div>
  );
};

export default Layout;
