import Task from "_pages/task/task";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ImProfile } from "react-icons/im";
import { FiSettings } from "react-icons/fi";
import { IoMdNotifications } from "react-icons/io";

const ToolbarWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 100px;
  gap: 25px;
  padding: 20px;
`;

const ToolbarButton = styled.button`
  background-color: #e0e0e0;
  border: none;
  color: #333;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d0d0d0;
  }
`;

const Toolbar = () => {
  return (
    <div>
      <ToolbarWrapper>
        <Link>
          <IoMdNotifications size={30} color="#f6e709" />
        </Link>
        <Link to="/">
          <FiSettings size={30} color="#e9b30f" />
        </Link>
        <Link to="/profile">
          <ImProfile size={30} color="#b513cd" />
        </Link>
      </ToolbarWrapper>
    </div>
  );
};

export default Toolbar;
