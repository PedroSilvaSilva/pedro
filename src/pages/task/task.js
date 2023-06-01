import React from "react";
import Sidebar from "../../components/molecules/sidebar/sidebar";
import Card from "../../components/molecules/card/card";
import { ContainerCard } from "./task.style";
import Calendar from "react-calendar";
import { SidebarCalendar } from "../../components/molecules/sidebar/sidebarcalendar";
import Header from "../../organisms/header/header";

const Task = () => {
  return (
    <section>
      <article>
        <Sidebar />
        <Header />
      </article>
    </section>
  );
};

export default Task;
