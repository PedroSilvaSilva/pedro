import React, { useState } from "react";
import { Sidebardata } from "../../../data/sidebardata";
import { ContainerBar, ContainerHeader, ContainerLi } from "./sidebar.style";

const Sidebar = () => {
  return (
    <>
      <ContainerBar>
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
