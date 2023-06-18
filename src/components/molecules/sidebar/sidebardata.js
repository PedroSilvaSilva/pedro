import React from "react";
import { ImProfile } from "react-icons/im";
import { BsListTask } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";

export const Sidebardata = [
  {
    title: "Dashboard",
    icon: <AiOutlineHome />,
    link: "/dashboard",
  },

  {
    title: "Task",
    icon: <BsListTask />,
    link: "/task",
  },

  {
    title: "Profile",
    icon: <ImProfile />,
    link: "/profile",
  },
  {
    title: "Log Out",
    icon: <BiLogOut />,
    link: "/login",
  },
];
