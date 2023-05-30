import React from "react";
import Sidebar from "../../organisms/sidebar/sidebar";
import Card from "../../components/card/card";
import { ContainerCard } from "./task.style";
import Input from "../../components/input/input";

const Task = () => {
  return (
    <ContainerCard>
      <Sidebar />

      <Card />
    </ContainerCard>
  );
};

export default Task;
