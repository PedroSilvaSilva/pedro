import React from "react";
import { Link } from "react-router-dom";
import { ContainerHeader, ContainerBar, ContainerLogo } from "./sidebar.style";
import { AiFillBulb, AiFillSetting } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
// import { GiHamburgerMenu } from "react-icons/gi";
import { VscWorkspaceTrusted } from "react-icons/vsc";

const Sidebar = () => {
  return (
    <ContainerHeader>
      <img src="https://schedulecreation.com/logo.png" alt="logo" />

      <ContainerLogo>
        <h1>
          <RxDashboard />
          Dashboard
        </h1>
        <h2>
          <VscWorkspaceTrusted /> WorkSpace
        </h2>
      </ContainerLogo>

      <ContainerBar>
        <Link to="/overview">
          <AiFillBulb />
          Overview
        </Link>
        <Link to="/task">
          <FaTasks />
          Tasks
        </Link>
        <Link to="/profile">
          <AiFillSetting />
          Profile
        </Link>
      </ContainerBar>
    </ContainerHeader>
  );
};

export default Sidebar;
