import React, { useState } from "react";
import { Sidebardata } from "./sidebardata";
import { ContainerBar, ContainerHeader, ContainerLi } from "./sidebar.style";
import { Button } from "_components/atoms";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button onClick={toggleSidebar}>Toggle Sidebar</Button>
      <ContainerBar isOpen={!isOpen}>
        {Sidebardata.map((val, key) => {
          return (
            <ContainerHeader key={key}>
              <ContainerLi
                id={window.location.pathname === val.link ? "active" : ""}
                onClick={() => {
                  window.location.pathname = val.link;
                }}
              >
                <div id="icon">
                  <h2>{val.icon}</h2>
                </div>
                <div id="title">
                  <h2>{val.title}</h2>
                </div>
              </ContainerLi>
            </ContainerHeader>
          );
        })}
      </ContainerBar>
    </>
  );
};

export default Sidebar;
