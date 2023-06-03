import React from "react";
import Calendar from "react-calendar";

import { Sidebar, Card, User } from "_components/molecules";

import Header from "../../components/organisms/header/header";

import { ContainerMain } from "./dashboard.style";

const Layout = () => {
  return (
    <ContainerMain className="container">
      <main>
        <Header />
      </main>
      <div id="sidebar">
        <Sidebar />
      </div>
      <div id="content1">
        <User />
        <Calendar />
      </div>
      <div id="content2">
        <Card />
      </div>
    </ContainerMain>
  );
};

export default Layout;
