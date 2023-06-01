import React from "react";
import Sidebar from "../../molecules/sidebar/sidebar";

import { Container, ContainerMain } from "./dashboard.style";
import Header from "../../../organisms/header/header";
import {
  SideHeader,
  SidebarCalendar,
} from "../../molecules/sidebar/sidebardata";
import Card from "../../molecules/card/card";

const Layout = () => {
  return (
    <ContainerMain className="container">
      <main>
        <Header />
      </main>
      <div id="sidebar">
        <Sidebar />
      </div>
      <div id="content1"></div>
      <div id="content2">
        <Card />
      </div>
    </ContainerMain>
  );
};

export default Layout;
