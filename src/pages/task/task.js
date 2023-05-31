import React from "react";
import Sidebar from "../../components/molecules/sidebar/sidebar";
import Card from "../../components/molecules/card/card";
import { ContainerCard } from "./task.style";

const Task = () => {
  return (
    <ContainerCard>
      <Sidebar />

      <Card />
    </ContainerCard>
  );
};

export default Task;
