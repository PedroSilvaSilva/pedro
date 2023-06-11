import React from "react";

import { Sidebar } from "_components/molecules";
import { styled } from "styled-components";

import CardDashboard from "_components/molecules/card/card";

const ContairnerGeral = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;

  background-color: #f2f2f2;
`;
const Container = styled.div`
  background-color: #f2f2f2;
`;

const Layout = () => {
  return (
    <ContairnerGeral>
      <div>
        <Sidebar />
      </div>
      <Container>
        <CardDashboard />
      </Container>
    </ContairnerGeral>
  );
};

export default Layout;
