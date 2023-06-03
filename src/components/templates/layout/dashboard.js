import React from "react";
import Sidebar from "../../molecules/sidebar/sidebar";
import Header from "../../../components/organisms/header/header";
import Calendar from "react-calendar";
import Card from "../../molecules/card/card";
import { ContainerMain } from "./dashboard.style";
import User from "../../molecules/user/user";

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
