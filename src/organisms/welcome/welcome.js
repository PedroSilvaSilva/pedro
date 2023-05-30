import React from "react";
import { Container } from "./welcome.style";
import Button from "../../components/button/button";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { user } from "../data/datauser";
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
