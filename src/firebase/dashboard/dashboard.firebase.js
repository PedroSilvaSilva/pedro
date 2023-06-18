import React from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import Toolbar from "../../components/molecules/toolbar/tolbar";
import {
  Card,
  Title,
  Description,
  Button,
  Card2,
  ContainerCard,
  ContainerMenu,
  ContainerImge,
} from "../../firebase/dashboard/dashboard.styles";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyA1i2tFg43acxCVK9X3fFFVM042qPRDVnw",
  authDomain: "projecto-971ef.firebaseapp.com",
  projectId: "projecto-971ef",
});

const DashboardFirebase = () => {
  const [user, setUsers] = useState([]);
  const [users, setUserss] = useState([]);
  const navigate = useNavigate();
  const db = getFirestore(firebaseApp);
  const userCollectionRef = collection(db, "cards");
  const userCollectionRefusers = collection(db, "users");
  const handlenavigate = () => {
    navigate("/task");
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      console.log(data.docs.map((docs) => ({ ...docs.data(), id: docs.id })));
      setUsers(data.docs.map((docs) => ({ ...docs.data(), id: docs.id })));
    };
    getUsers();
  }, []);

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRefusers);
      console.log(data.docs.map((docs) => ({ ...docs.data(), id: docs.id })));
      setUserss(data.docs.map((docs) => ({ ...docs.data(), id: docs.id })));
    };
    getUsers();
  }, []);

  return (
    <ContainerCard>
      <ContainerMenu>
        <Toolbar />
      </ContainerMenu>

      {users.map((val) => (
        <Card2 key={val.id}>
          <Title>Welcome back 👋 {val.name} </Title>
          <Description>{val.description}</Description>

          <ContainerImge>
            <img src={val.image} />
          </ContainerImge>
          <Button onClick={handlenavigate}> Go Now </Button>
        </Card2>
      ))}

      {user.map((val) => (
        <Card key={val.id}>
          <Title>{val.title}</Title>
          <ContainerImge>
            <img src={val.image} />
          </ContainerImge>
          <Description>{val.description}</Description>
          <Button>See more...</Button>
        </Card>
      ))}
    </ContainerCard>
  );
};

export default DashboardFirebase;
