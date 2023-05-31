import React from "react";
import { RxVercelLogo } from "react-icons/rx";
import { ImProfile } from "react-icons/im";
import { BsListTask } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import Calendar from "react-calendar";

export const Sidebardata = [
  {
    title: "Dashboard",
    icon: <AiOutlineHome />,
    link: "/dashboard",
  },
  {
    title: "Overview",
    icon: <RxVercelLogo />,
    link: "/overview",
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

export const SidebarCalendar = [
  {
    title: "calendar",
    type: <Calendar />,
  },
];
