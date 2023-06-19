import React from "react";

import TaskConfig from "../../firebase/tasks/task.firebase";
import Footer from "_components/molecules/footer/footer";
import { Sidebar } from "_components/molecules";
import {
  ContairnerGeral,
  Container,
  ContainerMobile,
} from "../../pages/task/task.style";

const Task = () => {
  return (
    <ContairnerGeral>
      <ContainerMobile>
        <Sidebar />
      </ContainerMobile>
      <Container>
        <TaskConfig />
      </Container>
      <Footer />
    </ContairnerGeral>
  );
};

export default Task;
