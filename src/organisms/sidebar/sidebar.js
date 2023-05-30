import React from "react";
import { user } from "../data/datauser";
import { Sidebardata } from "./sidebardata";
import {
  ContainerBar,
  ContainerHeader,
  ContainerLogo,
  ContainerUSer,
} from "./sidebar.style";

import logo from "../../assets/images/logo.png";

const Sidebar = () => {
  return (
    <>
      <ContainerBar>
        <img src={logo} alt="Logo" />

        <ContainerUSer>
          {user.map((val) => {
            return (
              <div>
                <h2>{val.image.src}</h2>
                <h2>
                  {val.icon} {val.name}
                </h2>
                <h2>
                  {val.icon2}
                  {val.job}
                </h2>
              </div>
            );
          })}
        </ContainerUSer>

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
