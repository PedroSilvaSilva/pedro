import React from "react";
import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { CardContainer } from "_components/molecules/footer/cards/card.style";
import Toolbar from "_components/molecules/toolbar/tolbar";
import {
  Title,
  Description,
  ContainerGeral,
  ContainerMenu,
  ContainerImge,
} from "./profile.style";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyA1i2tFg43acxCVK9X3fFFVM042qPRDVnw",
  authDomain: "projecto-971ef.firebaseapp.com",
  projectId: "projecto-971ef",
});

const ProfileFireBase = () => {
  const [users, setUsers] = useState([]);

  const db = getFirestore(firebaseApp);
  const userCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((docs) => ({ ...docs.data(), id: docs.id })));
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
          <CardContainer key={val.id} width="1440px" height="800px">
            <ContainerImge>
              <img src={val.image} alt="Profile" />
            </ContainerImge>
            <Title>My Profile 👋 {val.name}</Title>
            <Description>Email: {val.email}</Description>
            <Description>Bio: {val.Bio}</Description>
          </CardContainer>
        ))}
      </ContainerGeral>
    </>
  );
};

export default ProfileFireBase;
