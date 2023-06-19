import React, { useState } from "react";
import axios from "axios";
import {
  Input,
  Container,
  Description,
  Title,
  Card,
} from "_pages/forget/foget.style";
import logo from "_assets/images/logo.png";
import { Button } from "_components/atoms";

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
        <img src={logo} alt="logo" />
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
