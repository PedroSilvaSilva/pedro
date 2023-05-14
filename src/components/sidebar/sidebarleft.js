import React from "react";
import Button from "../button/button";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const SidebarLeft = () => {
  return (
    <header className="test1">
      <div className="widget-sidebarleft">
        <div className="widget-sidebarleft__logo">
          <img
            className="widget-sidebarleft__user"
            src="https://schedulecreation.com/user.png"
            alt="user"
          />
          <p>Nome de User</p>
          <p>Email</p>
          <Button> My profile </Button>
        </div>
        <div className="widget-sidebarleft__calendar">
          <Calendar />
        </div>
      </div>
    </header>
  );
};

export default SidebarLeft;
