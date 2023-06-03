import React from "react";

import { Link } from "react-router-dom";

import { Button, Input } from "_components/atoms";

import logo from "_assets/images/logo.png";

import { ContainerImg, ContainerLogin } from "./login.style";
import { useLogin } from "./login.handlers";

const Login = () => {
  const { email, setEmail, password, setPassword, isLoading, error,handleLogin } =
    useLogin();

  return (
    <section>
      <ContainerLogin>
        <ContainerImg>
          <h2>Take your productivity to the next level.</h2>
          <img src={logo} alt="Logo" />
        </ContainerImg>
        <div>
          <h2>Login</h2>
          <br />
          <form onSubmit={handleLogin}>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p>{error}</p>}
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
          <p>
            <br />
            <Link  to="/createaccount">Create Account</Link>
          </p>
        </div>
      </ContainerLogin>
    </section>
  );
};

export default Login;
