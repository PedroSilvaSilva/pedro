import React from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, addDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
  FormButton,
  FormSelect,
  FormInput,
  FormLabel,
  FormWrapper,
} from "../addtask/addtask.style";
import { Button } from "_components/atoms";
import { useNavigate } from "react-router-dom";
import { ButtonContainer } from "_components/atoms/button/button.style";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyA1i2tFg43acxCVK9X3fFFVM042qPRDVnw",
  authDomain: "projecto-971ef.firebaseapp.com",
  projectId: "projecto-971ef",
});

const AddTask = () => {
  const [addtak, setAddtask] = useState([]);
  const [taskdescription, setTaskdescription] = useState("");
  const [taskname, setTaskname] = useState("");
  const [taskpriority, setTaskpriority] = useState("");
  const [taskstatus, setTaskStatus] = useState("");
  const navigator = useNavigate();

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

  const returnTask = () => {
    navigator("/task");
  };
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
      setAddtask(data.docs.map((docs) => ({ ...docs.data(), id: docs.id })));
    };
    getUsers();
  }, []);

  return (
    <FormWrapper>
      <Button onClick={returnTask}>Voltar</Button>
      <FormLabel>Nome da Task</FormLabel>
      <FormInput
        type="text"
        value={taskname}
        onChange={(e) => setTaskname(e.target.value)}
        required
      />
      <FormLabel> Task Status</FormLabel>
      <FormInput
        type="text"
        value={taskstatus}
        onChange={(e) => setTaskStatus(e.target.value)}
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
      <Button onClick={handleSubmit}>Criar Task</Button>
    </FormWrapper>
  );
};

export default AddTask;
