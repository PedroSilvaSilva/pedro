import React from "react";
import DashboardFirebase from "../../firebase/dashboard/dashboard.firebase";
import { Sidebar } from "_components/molecules";
import {
  ContairnerGeral,
  Container,
  SideBar,
} from "../dashboard/dashboard.style";

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
