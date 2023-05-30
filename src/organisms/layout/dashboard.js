import React from "react";
import Sidebar from "../sidebar/sidebar";

import { WidgetLayout, Container } from "./dashboard.style";
import Header from "../header/header";

const Layout = () => {
  return (
    <Container>
      <Sidebar />
      <WidgetLayout>
        <Header />
      </WidgetLayout>
    </Container>
  );
};

export default Layout;
