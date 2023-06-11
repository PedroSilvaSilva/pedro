import React from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, addDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyA1i2tFg43acxCVK9X3fFFVM042qPRDVnw",
  authDomain: "projecto-971ef.firebaseapp.com",
  projectId: "projecto-971ef",
});

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
    <div>
      <div>
        <label>Nome da Task</label>
        <input
          type="text"
          value={taskname}
          onChange={(e) => setTaskname(e.target.value)}
          required
        />
        <label>Descrição da Task</label>
        <input
          type="text"
          value={taskdescription}
          onChange={(e) => setTaskdescription(e.target.value)}
          required
        />
        <label>Preoridade da Task</label>
        <select
          value={taskpriority}
          onChange={(e) => setTaskpriority(e.target.value)}
          required
        >
          <option value="high">High</option>
          <option value="normal">Normal</option>
          <option value="intermediate">Intermediate</option>
        </select>
        <button onClick={handleSubmit}>Criar Task</button>
      </div>
    </div>
  );
};

export default AddTask;
