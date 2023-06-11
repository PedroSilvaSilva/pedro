import React from "react";
import { Sidebardata } from "./sidebardata";
import { ContainerBar, ContainerHeader, ContainerLogo } from "./sidebar.style";
import { GiHamburgerMenu } from "react-icons/gi";
const Sidebar = () => {
  return (
    <>
      <ContainerBar>
        <div>
          <GiHamburgerMenu size={33} />
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
