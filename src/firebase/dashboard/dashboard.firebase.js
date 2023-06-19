import React from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import Toolbar from "../../components/molecules/toolbar/tolbar";
import {
  Title,
  Description,
  ContainerGeral,
  ContainerMenu,
  ContainerImge,
} from "../../firebase/dashboard/dashboard.styles";
import { Button } from "_components/atoms";
import { CardContainer } from "_firebase/cards/card.style";

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

      setUsers(data.docs.map((docs) => ({ ...docs.data(), id: docs.id })));
    };
    getUsers();
  }, []);

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRefusers);

      setUserss(data.docs.map((docs) => ({ ...docs.data(), id: docs.id })));
    };
    getUsers();
  }, []);

  return (
    <>
      <ContainerGeral>
        <ContainerMenu>
          <Toolbar />
        </ContainerMenu>

        {users.map((val) => (
          <CardContainer key={val.id} width="1320px" height="400px">
            <Title>Welcome back 👋 {val.name} </Title>
            <Description>{val.description}</Description>

            <ContainerImge>
              <img src={val.image} alt="Logo" />
            </ContainerImge>
            <Button onClick={handlenavigate}> Go Now </Button>
          </CardContainer>
        ))}

        {user.map((val) => (
          <CardContainer key={val.id}>
            <Title>{val.title}</Title>
            <ContainerImge>
              <img src={val.image} />
            </ContainerImge>
            <Description>{val.description}</Description>
            <Button onClick={handlenavigate}> See More... </Button>
          </CardContainer>
        ))}
      </ContainerGeral>
    </>
  );
};

export default DashboardFirebase;
