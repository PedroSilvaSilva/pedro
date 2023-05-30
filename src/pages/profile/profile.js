import React, { useState } from "react";
import Button from "../../components/button/button";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../organisms/sidebar/sidebar";
import Card from "../../components/card/card";
import { ContainerPro, ContainerUser } from "./profile.style";
import Input from "../../components/input/input";
import { user } from "../../organisms/data/datauser";
import { AiOutlineSearch } from "react-icons/ai";
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
            <Input
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
                  {showConfirmation ? (
                    <div>
                      <p>Are you sure you want to logout?</p>
                      <br />
                      <Button onClick={handleLogout}>Yes, Logout</Button>
                      <br />

                      <Button onClick={handleCancelLogout}>Cancel</Button>
                    </div>
                  ) : (
                    <Button onClick={handleLogoutConfirmation}>Logout</Button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </ContainerPro>
    </>
  );
};

export default Profile;
