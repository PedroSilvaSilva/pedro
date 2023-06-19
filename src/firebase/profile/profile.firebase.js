import React from "react";
import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getFirestore,
  getDocs,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";
import { CardContainer } from "_firebase/cards/card.style";
import Toolbar from "_components/molecules/toolbar/tolbar";
import {
  Title,
  Description,
  ContainerGeral,
  ContainerMenu,
  ContainerImge,
} from "./profile.style";
import { Button } from "_components/atoms";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyA1i2tFg43acxCVK9X3fFFVM042qPRDVnw",
  authDomain: "projecto-971ef.firebaseapp.com",
  projectId: "projecto-971ef",
});

const ProfileFireBase = () => {
  const [users, setUsers] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState("");
  const [editedEmail, setEditedEmail] = useState("");
  const [editedBio, setEditedBio] = useState("");
  const navigate = useNavigate();
  const db = getFirestore(firebaseApp);
  const userCollectionRef = collection(db, "users");

  const handleNavigate = () => {
    navigate("/task");
  };

  const handleEditName = (event) => {
    setEditedName(event.target.value);
  };

  const handleEditEmail = (event) => {
    setEditedEmail(event.target.value);
  };

  const handleEditBio = (event) => {
    setEditedBio(event.target.value);
  };

  const handleSaveProfile = async (userId) => {
    try {
      await updateDoc(doc(db, "users", userId), {
        name: editedName,
        email: editedEmail,
        Bio: editedBio,
      });
      setIsEditing(false);
    } catch (error) {
      alert("Erro Alterar Perfil");
    }
  };

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
          <CardContainer key={val.id} width="1500px" height="750px">
            <ContainerImge>
              <img src={val.image} alt="Profile" />
            </ContainerImge>
            <Title>My Profile 👋</Title>
            {isEditing ? (
              <>
                <label>Name:</label>
                <input
                  type="text"
                  value={editedName}
                  onChange={handleEditName}
                />
                <label>Email:</label>
                <input
                  type="email"
                  value={editedEmail}
                  onChange={handleEditEmail}
                />
                <label>Bio:</label>
                <textarea
                  value={editedBio}
                  onChange={handleEditBio}
                  rows={4}
                  cols={50}
                />
              </>
            ) : (
              <>
                <Description>Name: {val.name}</Description>

                <Description>Email: {val.email}</Description>

                <Description>Bio: {val.Bio}</Description>
              </>
            )}

            {!isEditing && (
              <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
            )}
            {isEditing && (
              <>
                <Button onClick={() => handleSaveProfile(val.id)}>
                  Save Profile
                </Button>
                <Button onClick={() => setIsEditing(false)}>Cancel</Button>
              </>
            )}

            <Button onClick={handleNavigate}>Go Now</Button>
          </CardContainer>
        ))}
      </ContainerGeral>
    </>
  );
};

export default ProfileFireBase;
