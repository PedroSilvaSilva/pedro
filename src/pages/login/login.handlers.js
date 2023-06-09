import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { login } from "_api/users";

import { loginSuccess, loginFailure } from "_store/login-reducer";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(loginFailure(null));
    }
  }, [error, dispatch]);

  const handleLogin = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    await login({
      email,
      password,
      successCallback: () => {
        setEmail("");
        setPassword("");
        dispatch(loginSuccess());
        navigate("/welcome");
        setIsLoading(false);
      },
      errorCallback: () => {
        dispatch(
          loginFailure(
            "An error occurred while logging in. Please check your credentials."
          )
        );
        setIsLoading(false);
      },
    });
  };

  return {
    isLoading,
    email,
    setEmail,
    password,
    setPassword,
    error,
    handleLogin,
  };
};

export { useLogin };
