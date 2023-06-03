import React from "react";
import Sidebar from "../../components/molecules/sidebar/sidebar";
import Card from "../../components/molecules/card/card";
import { ContainerCard } from "./task.style";
import Calendar from "react-calendar";
import { SidebarCalendar } from "../../components/molecules/sidebar/sidebarcalendar";
import Header from "../../organisms/header/header";
import { task } from "../../organisms/data/datatask";

const Task = () => {
  return (
    <section>
      <article>
        {task.map((val, key) => {
          return <div>{val.creator}</div>;
        })}
      </article>
    </section>
  );
};

export default Task;
