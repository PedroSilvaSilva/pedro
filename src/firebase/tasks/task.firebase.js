import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { Link, useNavigate } from "react-router-dom";
import {
  getFirestore,
  getDocs,
  collection,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import {
  ConatinerBio,
  ConatinerMobile,
  FormSelect,
  ModalButton,
  Description2,
  ToolbarWrapper,
  ToolbarButton,
  Title,
  Input,
  ContainerCard,
  ContainerMenu,
  Modal,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalCloseButton,
  ModalBody,
  Input2,
  PaginationWrapper,
  PaginationButton,
  Description3,
} from "./task.style";
import { GoArrowRight } from "react-icons/go";
import Toolbar from "_components/molecules/toolbar/tolbar";
import Button from "_components/atoms/button/button";
import { CardContainer } from "_firebase/cards/card.style";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyA1i2tFg43acxCVK9X3fFFVM042qPRDVnw",
  authDomain: "projecto-971ef.firebaseapp.com",
  projectId: "projecto-971ef",
});

const Pagination = ({
  currentPage,
  tasksPerPage,
  totalTasks,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalTasks / tasksPerPage);

  const handleClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <PaginationButton
          key={i}
          active={i === currentPage}
          onClick={() => handleClick(i)}
        >
          {i}
        </PaginationButton>
      );
    }

    return pageNumbers;
  };

  return <PaginationWrapper>{renderPageNumbers()}</PaginationWrapper>;
};

const TaskConfig = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filter, setFilter] = useState("all");
  const [editingTask, setEditingTask] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 15;
  const db = getFirestore(firebaseApp);
  const userCollectionRef = collection(db, "tasks");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      const usersData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUsers(usersData);
      setFilteredUsers(usersData);
    };
    getUsers();
  }, []);

  useEffect(() => {
    const handleFilterChange = users.filter((task) => {
      if (filter === "all") {
        return true;
      } else if (filter === "pending") {
        return task.status === "pending";
      } else if (filter === "completed") {
        return task.status === "completed";
      } else if (filter === "incompleted") {
        return task.status === "incompleted";
      } else if (filter === "search") {
        const taskName = task.taskname.toLowerCase();
        const taskDescription = task.taskdescription.toLowerCase();
        const searchTerm = searchValue.toLowerCase();
        return (
          taskName.includes(searchTerm) || taskDescription.includes(searchTerm)
        );
      }
      return true;
    });

    setFilteredUsers(handleFilterChange);
  }, [users, filter, searchValue]);

  const handleFilterChange = (newFilter, searchValue = "") => {
    setFilter(newFilter);
    setSearchValue(searchValue);
  };

  const NewTask = () => {
    navigate("/addtask");
  };

  const startEditing = (task) => {
    setEditingTask(task);
    setShowModal(true);
  };

  const cancelEditing = () => {
    setEditingTask(null);
    setShowModal(false);
  };

  const saveTask = async (editedTask) => {
    const taskRef = doc(db, "tasks", editedTask.id);
    await updateDoc(taskRef, editedTask);
    setEditingTask(null);
    setShowModal(false);
    setFilteredUsers((prevState) =>
      prevState.map((task) => (task.id === editedTask.id ? editedTask : task))
    );
  };

  const deleteTask = async (taskId) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      try {
        await deleteDoc(doc(db, "tasks", taskId));
        setFilteredUsers((prevState) =>
          prevState.filter((task) => task.id !== taskId)
        );
      } catch (error) {
        console.error("Error deleting task: ", error);
      }
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = filteredUsers.slice(indexOfFirstTask, indexOfLastTask);

  return (
    <ConatinerMobile>
      <ContainerMenu>
        <Toolbar />
      </ContainerMenu>

      <ToolbarWrapper>
        <Input2
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => handleFilterChange("search", e.target.value)}
        />
        <Button onClick={NewTask}>Create Task</Button>
        <ToolbarButton
          active={filter === "all"}
          onClick={() => handleFilterChange("all")}
        >
          All Tasks
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
        <ToolbarButton
          active={filter === "completed"}
          onClick={() => handleFilterChange("completed")}
        >
          Completed
        </ToolbarButton>
      </ToolbarWrapper>

      <ContainerCard>
        {currentTasks.map((val) => (
          <CardContainer width="290px" height="150px" key={val.id}>
            <Description3>
              <Title>
                {val.taskname.length > 10
                  ? val.taskname.substring(0, 10) + "..."
                  : val.taskname}
              </Title>
            </Description3>

            <Description2>
              {val.taskdescription.length > 15
                ? val.taskdescription.substring(0, 15) + "..."
                : val.taskdescription}
            </Description2>
            <Link className="link" onClick={() => startEditing(val)}>
              Work On Task <GoArrowRight size={16} />
            </Link>
          </CardContainer>
        ))}
      </ContainerCard>
      {filteredUsers.length > tasksPerPage && (
        <Pagination
          currentPage={currentPage}
          tasksPerPage={tasksPerPage}
          totalTasks={filteredUsers.length}
          onPageChange={handlePageChange}
        />
      )}

      {editingTask && (
        <Modal>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Edit Task</ModalTitle>
              <ModalCloseButton onClick={cancelEditing}>
                &times;
              </ModalCloseButton>
            </ModalHeader>
            <ModalBody>
              <CardContainer
                boxShadow="transparent"
                backgroundColor="transparent"
                width="1000px"
                height="450px"
              >
                <Title>Task Name</Title>
                <Input
                  type="text"
                  value={editingTask.taskname}
                  onChange={(e) =>
                    setEditingTask({
                      ...editingTask,
                      taskname: e.target.value,
                    })
                  }
                />

                <Title>Priority</Title>
                <FormSelect>
                  <Input
                    type="text"
                    value={editingTask.taskpriority}
                    onChange={(e) =>
                      setEditingTask({
                        ...editingTask,
                        taskpriority: e.target.value,
                      })
                    }
                  />
                  <option value="">Escolha a propriedade da task</option>
                  <option value="high">High</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="normal">Normal</option>
                </FormSelect>
                <Title>Status</Title>
                <FormSelect>
                  <Input
                    type="text"
                    value={editingTask.taskpriority}
                    onChange={(e) =>
                      setEditingTask({
                        ...editingTask,
                        taskpriority: e.target.value,
                      })
                    }
                  />
                  <option value="">Escolha o status da task</option>
                  <option value="high">Pending</option>
                  <option value="intermediate">Incompleted</option>
                  <option value="normal">Completed</option>
                </FormSelect>
                <Title>Description</Title>
                <ConatinerBio
                  value={editingTask.taskdescription}
                  rows={7}
                  cols={70}
                  onChange={(e) =>
                    setEditingTask({
                      ...editingTask,
                      taskdescription: e.target.value,
                    })
                  }
                ></ConatinerBio>
                <ModalButton>
                  <Button onClick={() => saveTask(editingTask)}>Save</Button>
                  <Button onClick={cancelEditing}>Cancel</Button>
                  <Button onClick={() => deleteTask(editingTask.id)}>
                    Delete Task
                  </Button>
                </ModalButton>
              </CardContainer>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </ConatinerMobile>
  );
};

export default TaskConfig;
