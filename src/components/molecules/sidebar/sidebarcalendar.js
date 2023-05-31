import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const SidebarCalendar = () => {
  return (
    <header className="test1">
      <div className="widget-sidebarleft__calendar">
        <Calendar />
      </div>
    </header>
  );
};

export { SidebarCalendar };
