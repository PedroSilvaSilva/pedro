import React from "react";
import Calendar from "react-calendar";

import { Sidebar, User } from "_components/molecules";

import Header from "../../components/organisms/header/header";

import { ContainerMain } from "./dashboard.style";

const Layout = () => {
  return (
    <ContainerMain className="container">
      <main></main>
      <div id="sidebar">
        <Sidebar />
      </div>
    </ContainerMain>
  );
};

export default Layout;
