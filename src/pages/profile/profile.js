import React, { useState } from "react";
import Button from "../../components/button/button";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../organisms/sidebar/sidebar";
import Card from "../../components/card/card";
import { ContainerPro } from "./profile.style";
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
        <p>Settings</p>

        <div>
          {showConfirmation ? (
            <div>
              <p>Are you sure you want to logout?</p>
              <Button onClick={handleLogout}>Yes, Logout</Button>
              <Button onClick={handleCancelLogout}>Cancel</Button>
            </div>
          ) : (
            <Button onClick={handleLogoutConfirmation}>Logout</Button>
          )}
        </div>
      </ContainerPro>
    </>
  );
};

export default Profile;
