import React from "react";
import Button from "../components/button/button";
import Inputs from "../components/inputs/inputs";

const Login = () => {
  return (
    <main>
      <section>
        <article className="widget-container">
          <h1 className="widget-container__title">
            Take your productivity to the next level.
          </h1>
          <img src="https://schedulecreation.com/logo.png" alt="logo" />
        </article>
      </section>
      <section>
        <article className="widget-login">
          <h2 className="widget-login__title">Login</h2>
          <form action="">
            <Inputs type="email" name="email" placeholder="Email" />
            <Inputs type="Password" name="Password" placeholder="Password" />
            <Button>Login</Button>
          </form>
        </article>
      </section>
    </main>
  );
};

export default Login;
