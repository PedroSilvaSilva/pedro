import axios from "axios";

const login = async (payload) => {
  const { email, password, successCallback, errorCallback } = payload;

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
      successCallback(response);
    })
    .catch((error) => {
      errorCallback(error);
      console.error(error);
    });
};

export { login };
