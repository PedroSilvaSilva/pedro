import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Sidebar, SidebarCalendar } from "_components/molecules";

import { Button } from "_components/atoms";

import { user } from "_data/datauser";

import logo from "_assets/images/logo.png";

import {
  ContainerPro,
  ContainerUser,
  ContainerCalendar,
} from "./profile.style";

const Profile = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  const handleLogoutConfirmation = () => {
    setShowConfirmation(true);
  };

  const handleCancelLogout = () => {
    setShowConfirmation(false);
  };

  return (
    <>
      <ContainerPro>
        <Sidebar />
        <div>
          <form action="" id="">
            <input
              type="pesquisa"
              name="pesquisa"
              placeholder="Search your Settings here..."
            />
          </form>
          <div>
            <h2>Settings</h2>
          </div>
          <div>
            <p>Account Settings</p>

            {user.map((val) => {
              return (
                <div>
                  <ContainerUser>
                    <p>
                      {val.icon}
                      {val.name}
                    </p>
                    <Button>Edit </Button>
                  </ContainerUser>
                  <ContainerUser>
                    <p>
                      {val.icon3}
                      {val.email}
                    </p>
                    <Button>Edit </Button>
                  </ContainerUser>
                  <ContainerUser>
                    <p>{val.password}</p>
                    <Button>Edit </Button>
                  </ContainerUser>
                  <Button>Edit Profile</Button>
                </div>
              );
            })}
          </div>
        </div>
        <ContainerCalendar>
          {user.map((val) => {
            return (
              <div>
                <img src={logo} alt="" />
                {/* //isto vai ser logo do user */}
                <h2>Perfil</h2>
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
          <SidebarCalendar />
        </ContainerCalendar>
      </ContainerPro>
    </>
  );
};

export default Profile;
