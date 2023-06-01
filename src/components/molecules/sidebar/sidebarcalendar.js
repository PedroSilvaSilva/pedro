import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { ContainerCalendar } from "../sidebar/sidebar.style";

const SidebarCalendar = () => {
  return (
    <header>
      <div>
        <Calendar />
      </div>
    </header>
  );
};

export { SidebarCalendar };
