import React from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
  ToolbarWrapper,
  ToolbarButton,
  Card,
  Title,
  Description,
  Button,
  Card2,
  ContainerCard,
  ContainerMenu,
  ContainerImge,
  ContairnerGeral,
  Container,
  SideBar,
} from "./task.style";

import Toolbar from "_components/molecules/toolbar/tolbar";
import { useNavigate } from "react-router-dom";
const firebaseApp = initializeApp({
  apiKey: "AIzaSyA1i2tFg43acxCVK9X3fFFVM042qPRDVnw",
  authDomain: "projecto-971ef.firebaseapp.com",
  projectId: "projecto-971ef",
});

const TaskConfig = () => {
  const [user, setUsers] = useState([]);
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();
  const db = getFirestore(firebaseApp);
  const userCollectionRef = collection(db, "tasks");

  const NewTask = () => {
    navigate("/addtask");
  };
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      console.log(data.docs.map((docs) => ({ ...docs.data(), id: docs.id })));
      setUsers(data.docs.map((docs) => ({ ...docs.data(), id: docs.id })));
    };
    getUsers();
  }, []);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredTasks = user.filter((task) => {
    if (filter === "all") {
      return true;
    } else if (filter === "pending") {
      return task.status === "pending";
    } else if (filter === "completed") {
      return task.status === "completed";
    } else if (filter === "incompleted") {
      return task.status === "incompleted";
    }
    return true;
  });

  return (
    <div>
      <ContainerMenu>
        <Toolbar />
      </ContainerMenu>
      <Container>
        <h2>Tasks</h2>
        <p>Space Task</p>
        <Button onClick={NewTask}>Create Task</Button>
      </Container>
      <ToolbarWrapper>
        <ToolbarButton
          active={filter === "all"}
          onClick={() => handleFilterChange("all")}
        >
          All
        </ToolbarButton>
        <ToolbarButton
          active={filter === "completed"}
          onClick={() => handleFilterChange("completed")}
        >
          Completed
        </ToolbarButton>
        <ToolbarButton
          active={filter === "pending"}
          onClick={() => handleFilterChange("pending")}
        >
          Pending
        </ToolbarButton>

        <ToolbarButton
          active={filter === "incompleted"}
          onClick={() => handleFilterChange("incompleted")}
        >
          Incompleted
        </ToolbarButton>
      </ToolbarWrapper>

      <ContainerCard>
        {filteredTasks.map((val) => (
          <Card key={val.id}>
            <Title>Task Name: {val.taskname}</Title>
            <Description>Description: {val.taskdescription}</Description>
            <Description>Priority: {val.taskpriority}</Description>
            <Button>Update Task</Button>
          </Card>
        ))}
      </ContainerCard>
    </div>
  );
};

export default TaskConfig;
