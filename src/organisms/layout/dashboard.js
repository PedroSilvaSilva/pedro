import React from "react";
import Sidebar from "../sidebar/sidebar";
import SidebarLeft from "../sidebar/sidebarleft";
import Header from "../header/header";
import { WidgetLayout } from "./dashboard.style";

const Layout = () => {
  return (
    <WidgetLayout>
      <Sidebar />
      {/* <Header /> */}

      {/* <SidebarLeft /> */}
    </WidgetLayout>
  );
};

export default Layout;
