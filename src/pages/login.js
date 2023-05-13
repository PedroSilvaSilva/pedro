import React from "react";
import Button from "../components/button/button";
import Inputs from "../components/inputs/inputs";

const Login = () => {
  return (
    <main>
      <section>
        <article className="widget-container">
          <div>
            <img src="https://schedulecreation.com/logo.png" alt="logo" />
          </div>
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
