import React from "react";
import { Link } from "react-router-dom";
import { ToolbarWrapper } from "../toolbar/tolbar.style";
import { ImProfile } from "react-icons/im";
import { FiSettings } from "react-icons/fi";
import { IoMdNotifications } from "react-icons/io";
import logo from "../../../assets/images/logo.png";

const Toolbar = () => {
  return (
    <div>
      <ToolbarWrapper>
        <img src={logo} alt="" />
        <Link>
          <IoMdNotifications size={30} color="#273E47" />
        </Link>
        <Link to="/">
          <FiSettings size={30} color="#273E47" />
        </Link>
        <Link to="/profile">
          <ImProfile size={30} color="#273E47" />
        </Link>
      </ToolbarWrapper>
    </div>
  );
};

export default Toolbar;
