import React from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, addDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyA1i2tFg43acxCVK9X3fFFVM042qPRDVnw",
  authDomain: "projecto-971ef.firebaseapp.com",
  projectId: "projecto-971ef",
});

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  margin: 0 auto;
`;

const FormLabel = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const FormInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const FormSelect = styled.select`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const FormButton = styled.button`
  padding: 10px 15px;
  background-color: #4285f4;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const AddTask = () => {
  const [user, setUsers] = useState([]);
  const [taskdescription, setTaskdescription] = useState("");
  const [taskname, setTaskname] = useState("");
  const [taskpriority, setTaskpriority] = useState("");

  async function createTask() {
    const sendTask = await addDoc(userCollectionRef, {
      taskdescription,
      taskname,
      taskpriority,
    });
    setTaskdescription("");
    setTaskname("");
    setTaskpriority("");
  }

  const isFormValid = () => {
    return taskdescription !== "" && taskname !== "" && taskpriority !== "";
  };
  const handleSubmit = () => {
    if (isFormValid()) {
      createTask();
    } else {
      alert("Erro Task não preenchido");
    }
  };

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
    <FormWrapper>
      <FormLabel>Nome da Task</FormLabel>
      <FormInput
        type="text"
        value={taskname}
        onChange={(e) => setTaskname(e.target.value)}
        required
      />
      <FormLabel>Descrição da Task</FormLabel>
      <FormInput
        type="text"
        value={taskdescription}
        onChange={(e) => setTaskdescription(e.target.value)}
        required
      />
      <FormLabel>Prioridade da Task</FormLabel>
      <FormSelect
        value={taskpriority}
        onChange={(e) => setTaskpriority(e.target.value)}
        required
      >
        <option value="" disabled>
          Escolha a prioridade da task
        </option>
        <option value="normal">Normal</option>
        <option value="intermediate">Intermediate</option>
        <option value="high">High</option>
      </FormSelect>
      <FormButton onClick={handleSubmit}>Criar Task</FormButton>
    </FormWrapper>
  );
};

export default AddTask;
