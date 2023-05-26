import React from "react";
import Sidebar from "../sidebar/sidebar";
import SidebarLeft from "../sidebar/sidebarleft";
import Header from "../header/header";
import { Outlet } from "react-router-dom";
import Overview from "../../pages/overview";
import { WidgetLayout } from "./dashboard.style";

const Layout = () => {
  return (
    <WidgetLayout>
      <Sidebar />
      {/* <Header /> */}
      {/* <Overview /> */}
      <Outlet />
      {/* <SidebarLeft /> */}
    </WidgetLayout>
  );
};

export default Layout;
