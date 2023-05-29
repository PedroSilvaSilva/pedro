import React from "react";
import { GrOverview } from "react-icons/gr";
import { ImProfile } from "react-icons/im";
import { BsListTask } from "react-icons/bs";
export const Sidebardata = [
  {
    title: "Overview",
    icon: <GrOverview />,
    link: "/overview",
  },
  {
    title: "Task",
    icon: <BsListTask />,
    link: "/task",
  },
  {
    title: "Settings",
    icon: <ImProfile />,
    link: "/profile",
  },
];
