import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "_components/atoms/button/button";

import logo from "_assets/images/logo.png";

import { user } from "_data/datauser";

import { Container } from "_pages/welcome/welcome.style";

const Welcome = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/dashboard");
  };

  return (
    <Container>
      <img src={logo} alt="Logo" />
      {user.map((val) => {
        return (
          <div>
            <h2>Welcome Back {val.name} </h2>
          </div>
        );
      })}

      <Button onClick={handleGetStarted}> Go Work </Button>
    </Container>
  );
};

export default Welcome;
