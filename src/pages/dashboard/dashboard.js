import React from "react";
import DashboardFirebase from "../../firebase/dashboard/dashboard.firebase";
import { Sidebar } from "_components/molecules";
import {
  ContairnerGeral,
  Container,
  SideBar,
} from "_pages/dashboard/dashboard.style";
import Footer from "_components/molecules/footer/footer";
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
      <Footer />
    </>
  );
};

export default Layout;
