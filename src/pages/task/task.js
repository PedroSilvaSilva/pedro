import React from "react";

import TaskConfig from "../../firebase/tasks/task.firebase";

import { Sidebar } from "_components/molecules";
import { ContairnerGeral, Container } from "../../pages/task/task.style";

const Task = () => {
  return (
    <ContairnerGeral>
      <article>
        <Sidebar />
      </article>
      <Container>
        <TaskConfig />
      </Container>
    </ContairnerGeral>
  );
};

export default Task;
