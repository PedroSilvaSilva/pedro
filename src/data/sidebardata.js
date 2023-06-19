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

export const SidebardataFooter = [
  {
    title: "Dashboard",
    icon: <AiOutlineHome size={35} />,
    link: "/dashboard",
  },

  {
    title: "Task",
    icon: <BsListTask size={35} />,
    link: "/task",
  },

  {
    title: "Profile",
    icon: <ImProfile size={35} />,
    link: "/profile",
  },
  {
    title: "Log Out",
    icon: <BiLogOut size={35} />,
    link: "/login",
  },
];
