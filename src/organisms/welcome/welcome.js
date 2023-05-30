import React from "react";
import { Container } from "./welcome.style";
import Button from "../../components/button/button";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
const Welcome = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/dashboard");
  };

  return (
    <Container>
      <img src={logo} alt="Logo" />
      <h2>Welcome :) </h2>

      <Button onClick={handleGetStarted}> Get Started </Button>
    </Container>
  );
};

export default Welcome;
