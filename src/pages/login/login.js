import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import { loginSuccess, loginFailure } from "../../organisms/redux/loginreducer";
import { ContainerLogin, WidgetLogin } from "./login.style";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDq_DCx4aklBNibf1kl3KMil11DJpz7TlQ",
        {
          email,
          password,
        }
      )
      .then((response) => {
        setEmail("");
        setPassword("");
        dispatch(loginSuccess());
        navigate("/terms");
      })
      .catch((error) => {
        dispatch(
          loginFailure(
            "An error occurred while logging in. Please check your credentials."
          )
        );
        console.error(error);
      });
  };

  return (
    <>
      <ContainerLogin>
        <WidgetLogin>
          <div>
            <h2>Take your productivity to the next level.</h2>
            <img src="https://schedulecreation.com/logo.png" alt="logo" />
          </div>
          <article>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <p>{error}</p>}
              <Button type="submit">Login</Button>
              <Button onClick={handleCreateAccount}>Create Account</Button>
            </form>
          </article>
        </WidgetLogin>
      </ContainerLogin>
    </>
  );
};

export default Login;
