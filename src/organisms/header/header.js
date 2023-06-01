import React from "react";
import Button from "../../components/atoms/button/button";
import Input from "../../components/atoms/input/input.style";
import { SideHeader } from "../../components/molecules/sidebar/sidebardata";
import { ContainerNav } from "./header.style";

const Header = () => {
  return (
    <section>
      <div>
        <Input />
      </div>
      <h1>Tasks</h1>
      <h3>Make your tasks</h3>
      <article>
        <ContainerNav>
          {SideHeader.map((val) => {
            return (
              <div>
                <ul>
                  <li>
                    {val.icon}
                    {val.title}
                  </li>
                </ul>
              </div>
            );
          })}
          <Button>Create new task</Button>
        </ContainerNav>
      </article>
    </section>
  );
};

export default Header;
