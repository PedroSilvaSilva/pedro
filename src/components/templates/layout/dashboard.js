import React from "react";
import Sidebar from "../../molecules/sidebar/sidebar";
import Header from "../../../organisms/header/header";
import { WidgetLayout, Container, ContainerMain } from "./dashboard.style";

const Layout = () => {
  return (
    <ContainerMain>
      <Container>
        <Sidebar />
        <WidgetLayout>
          <Header />
        </WidgetLayout>
      </Container>
    </ContainerMain>
  );
};

export default Layout;
