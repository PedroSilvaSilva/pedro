import React from "react";

import { Link } from "react-router-dom";

import overlay_3 from "_assets/images/overlay_3.jpg";
import logo from "_assets/images/logo.png";
import { useLogin } from "./login.handlers";
import { BsDatabaseFillDash } from "react-icons/bs";
import {
  Button,
  ForgotPasswordLink,
  ErrorMessage,
  Input,
  Fieldset,
  Form,
  NewUserText,
  LoginTitle,
  LoginContainer,
  Section,
} from "../login/login.style";

const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    error,
    handleLogin,
  } = useLogin();

  return (
    <Section>
      <LoginContainer>
        <img src={logo} alt="logo" />
        <BsDatabaseFillDash size={52} />

        <LoginTitle>Login</LoginTitle>
        <NewUserText>
          <span>New user?</span>
          <Link to="/createaccount">Create Account</Link>
        </NewUserText>

        <Form onSubmit={handleLogin}>
          <Fieldset>
            <br />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Fieldset>
          <Fieldset>
            <br />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Fieldset>
          <br />
          {error && <ErrorMessage>{error}</ErrorMessage>}

          <ForgotPasswordLink>
            <Link to="/forget">Forgot password?</Link>
          </ForgotPasswordLink>
          <br />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </Form>
      </LoginContainer>

      <img className="imagem" src={overlay_3} alt="" />
    </Section>
  );
};

export default Login;
