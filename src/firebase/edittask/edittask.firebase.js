// import React, { useState, useEffect } from "react";
// import { initializeApp } from "firebase/app";
// import Button from "_components/atoms/button/button";
// import {
//   getFirestore,
//   getDocs,
//   collection,
//   updateDoc,
//   doc,
//   deleteDoc,
// } from "firebase/firestore";
// import {
//   Description2,
//   ToolbarWrapper,
//   ToolbarButton,
//   Card,
//   Title,
//   Input,
//   Description,
//   ContainerCard,
//   ContainerMenu,
//   Modal,
//   ModalContent,
//   ModalHeader,
//   ModalTitle,
//   ModalCloseButton,
//   ModalBody,
//   Card3,
//   Input2,
//   PaginationWrapper,
//   PaginationButton,
//   Description3,
// } from "../../firebase/edittask/edittask.style";

// const firebaseApp = initializeApp({
//   apiKey: "AIzaSyA1i2tFg43acxCVK9X3fFFVM042qPRDVnw",
//   authDomain: "projecto-971ef.firebaseapp.com",
//   projectId: "projecto-971ef",
// });

// const Edittask = () => {
//   const [editingTask, setEditingTask] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [users, setUsers] = useState([]);
//   const [filteredUsers, setFilteredUsers] = useState([]);

//   const db = getFirestore(firebaseApp);
//   const userCollectionRef = collection(db, "tasks");

//   useEffect(() => {
//     const getUsers = async () => {
//       const data = await getDocs(userCollectionRef);
//       const usersData = data.docs.map((doc) => ({
//         ...doc.data(),
//         id: doc.id,
//       }));
//       setUsers(usersData);
//       setFilteredUsers(usersData);
//     };
//     getUsers();
//   }, []);

//   const startEditing = (task) => {
//     setEditingTask(task);
//     setShowModal(true);
//   };

//   const cancelEditing = () => {
//     setEditingTask(null);
//     setShowModal(false);
//   };
//   const saveTask = async (editedTask) => {
//     const taskRef = doc(db, "tasks", editedTask.id);
//     await updateDoc(taskRef, editedTask);
//     setEditingTask(null);
//     setShowModal(false);
//     setFilteredUsers((prevState) =>
//       prevState.map((task) => (task.id === editedTask.id ? editedTask : task))
//     );
//   };

//   const deleteTask = async (taskId) => {
//     if (window.confirm("Are you sure you want to delete this task?")) {
//       try {
//         await deleteDoc(doc(db, "tasks", taskId));
//         setFilteredUsers((prevState) =>
//           prevState.filter((task) => task.id !== taskId)
//         );
//       } catch (error) {
//         console.error("Error deleting task: ", error);
//       }
//     }
//   };

//   return (
//     <div>
//       {editingTask && (
//         <Modal>
//           <ModalContent>
//             <ModalHeader>
//               <ModalTitle>Edit Task</ModalTitle>
//               <ModalCloseButton onClick={cancelEditing}>
//                 &times;
//               </ModalCloseButton>
//             </ModalHeader>
//             <ModalBody>
//               <Card3>
//                 <Title>Task Name</Title>
//                 <Input
//                   type="text"
//                   value={editingTask.taskname}
//                   onChange={(e) =>
//                     setEditingTask({
//                       ...editingTask,
//                       taskname: e.target.value,
//                     })
//                   }
//                 />
//                 <Title>Description</Title>
//                 <Input
//                   type="text"
//                   value={editingTask.taskdescription}
//                   onChange={(e) =>
//                     setEditingTask({
//                       ...editingTask,
//                       taskdescription: e.target.value,
//                     })
//                   }
//                 />
//                 <Title>Priority</Title>
//                 <Input
//                   type="text"
//                   value={editingTask.taskpriority}
//                   onChange={(e) =>
//                     setEditingTask({
//                       ...editingTask,
//                       taskpriority: e.target.value,
//                     })
//                   }
//                 />
//                 <Button onClick={() => deleteTask(editingTask.id)}>
//                   Delete Task
//                 </Button>
//                 <Button onClick={() => saveTask(editingTask)}>Save</Button>
//                 <Button onClick={cancelEditing}>Cancel</Button>
//               </Card3>
//             </ModalBody>
//           </ModalContent>
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default Edittask();
