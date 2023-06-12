import React from "react";

import { Sidebar } from "_components/molecules";
import { styled } from "styled-components";

import TaskConfig from "./task.config";

const ContairnerGeral = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;

  background-color: #f2f2f2;
`;
const Container = styled.div`
  background-color: #f2f2f2;
`;

const Task = () => {
  return (
    <ContairnerGeral>
      <div>
        <Sidebar />
      </div>
      <Container>
        <TaskConfig />
      </Container>
    </ContairnerGeral>
  );
};

export default Task;
