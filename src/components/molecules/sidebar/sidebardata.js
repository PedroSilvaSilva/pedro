import React from "react";
import { RxVercelLogo } from "react-icons/rx";
import { ImProfile } from "react-icons/im";
import { BsListTask } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { GrTask } from "react-icons/gr";
import Calendar from "react-calendar";

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
    title: "AddTask",
    icon: <BiLogOut />,
    link: "/addtask",
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

export const SideHeader = [
  {
    title: "All Task",
    icon: <GrTask />,
    link: "/tasks",
  },
  {
    title: "Pending",
    icon: <GrTask />,
    link: "/pending",
  },
  {
    title: "In Progress",
    icon: <GrTask />,
    link: "/progress",
  },
  {
    title: "Completed",
    icon: <GrTask />,
    link: "/completed",
  },
];
