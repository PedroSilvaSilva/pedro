import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { Button, Input } from "_components/atoms";

import { loginSuccess, loginFailure } from "_store/login-reducer";

import logo from "_assets/images/logo.png";

import { ContainerImg, ContainerLogin } from "./login.style";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate("/createaccount");
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(loginFailure(null));
    }
  }, [error, dispatch]);

  const handleLogin = (e) => {
    e.preventDefault();

    setIsLoading(true);

    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDq_DCx4aklBNibf1kl3KMil11DJpz7TlQ",
        {
          email,
          password,
          returnSecureToken: true,
        }
      )
      .then((response) => {
        setEmail("");
        setPassword("");
        dispatch(loginSuccess());
        navigate("/welcome");
      })
      .catch((error) => {
        dispatch(
          loginFailure(
            "An error occurred while logging in. Please check your credentials."
          )
        );
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

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
            <Button onClick={handleCreateAccount}>Create Account</Button>
          </p>
        </div>
      </ContainerLogin>
    </section>
  );
};

export default Login;
