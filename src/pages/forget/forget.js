import React, { useState } from "react";
import axios from "axios";
// import { Button, Input, Container } from "../forget/foget.style";
import styled from "styled-components";

const Container = styled.div`
  background-color: #f5f5f5;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  background-color: #fff;
  width: 400px;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const ResetPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleResetPassword = () => {
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDq_DCx4aklBNibf1kl3KMil11DJpz7TlQ",
        {
          email,
          requestType: "PASSWORD_RESET",
        }
      )
      .then((response) => {
        setSuccessMessage("Um e-mail para redefinição de senha foi enviado.");

        setEmail("");
        setErrorMessage("");
      })
      .catch((error) => {
        setErrorMessage("Ocorreu um erro ao solicitar a redefinição de senha.");
        setSuccessMessage("");
      });
  };

  return (
    <Container>
      <Card>
        <Title>Recover Password</Title>
        <Description>
          Please enter your email address below. We will send you a link to
          reset your password.
        </Description>
        <Input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button onClick={handleResetPassword}>Redefinir Senha</Button>
        {successMessage && <p>{successMessage}</p>}
        {errorMessage && <p>{errorMessage}</p>}
      </Card>
    </Container>
  );
};

export default ResetPasswordForm;
