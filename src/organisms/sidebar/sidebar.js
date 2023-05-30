import React from "react";
import { Sidebardata } from "./sidebardata";
import { ContainerBar, ContainerHeader, ContainerLogo } from "./sidebar.style";

const Sidebar = () => {
  return (
    <>
      <ContainerBar>
        <img src="https://schedulecreation.com/logo.png" alt="Logo" />

        <div>
          <img
            className="widget-sidebarleft__user"
            src="https://schedulecreation.com/user.png"
            alt="user"
          />
          <p>Nome de User</p>
          <p>Email</p>
        </div>

        {Sidebardata.map((val, key) => {
          return (
            <ContainerHeader>
              <ContainerLogo
                key={key}
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
              </ContainerLogo>
            </ContainerHeader>
          );
        })}
      </ContainerBar>
    </>
  );
};

export default Sidebar;
