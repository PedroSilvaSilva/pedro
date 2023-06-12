import React from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
  ContainerAll,
  Button,
  Description,
  Title,
  Card,
  ToolbarButton,
  ToolbarWrapper,
  ContainerFirst,
} from "../task/task.style";
import AddTask from "./addtask";
import Toolbar from "_components/molecules/toolbar/tolbar";
const firebaseApp = initializeApp({
  apiKey: "AIzaSyA1i2tFg43acxCVK9X3fFFVM042qPRDVnw",
  authDomain: "projecto-971ef.firebaseapp.com",
  projectId: "projecto-971ef",
});

const TaskConfig = () => {
  const [user, setUsers] = useState([]);
  const db = getFirestore(firebaseApp);
  const userCollectionRef = collection(db, "tasks");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      console.log(data.docs.map((docs) => ({ ...docs.data(), id: docs.id })));
      setUsers(data.docs.map((docs) => ({ ...docs.data(), id: docs.id })));
    };
    getUsers();
  }, []);

  return (
    <ContainerFirst>
      <div>
        <Toolbar />
      </div>
      <ContainerAll>
        {user.map((val) => (
          <Card key={val.id}>
            <Title>Task Name:{val.taskname}</Title>
            <Description> Description :{val.taskdescription}</Description>
            <Description>Priority: {val.taskpriority}</Description>
            <Button>Update Task</Button>
          </Card>
        ))}
      </ContainerAll>
    </ContainerFirst>
  );
};

export default TaskConfig;
