import React from "react";
import { Container } from "./welcome.style";
import Button from "../../components/button/button";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/dashboard");
  };

  return (
    <Container>
      <img src="https://schedulecreation.com/logo.png" alt="logo" />
      <h2>Welcome :)</h2>

      <Button onClick={handleGetStarted}> Get Started </Button>
    </Container>
  );
};

export default Welcome;
