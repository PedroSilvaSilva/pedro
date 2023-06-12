import React from "react";

import { Sidebar } from "_components/molecules";
import {
  ContairnerGeral,
  Container,
  SideBar,
} from "../dashboard/dashboard.style";

import DashboardFirebase from "./dashboard.firebase";

const Layout = () => {
  return (
    <>
      <ContairnerGeral>
        <SideBar>
          <Sidebar />
        </SideBar>
        <Container>
          <DashboardFirebase />
        </Container>
      </ContairnerGeral>
    </>
  );
};

export default Layout;
