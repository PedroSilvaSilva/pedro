import React from "react";
import Button from "../components/button/button";
import Inputs from "../components/inputs/inputs";

import lg from "../components/images/lg.png";
const Login = () => {
  return (
    <main>
      <section>
        <article className="widget-container">
          <div class>
            <h1 class>Take your productivity to the next level.</h1>
            <div>
              <img require={lg} alt="" />
            </div>
            {/* <fieldset>
              <legend>Get your Mobile App</legend>
              <a href="">Apple</a>
              <a href="">Android</a>
            </fieldset> */}
            <p>Copyright 2023 | All Right Reserved @Pedro Silva</p>
          </div>
        </article>
      </section>
      <section>
        <article className="widget-login">
          <h2 className="widget-login__title">Login</h2>
          <form action="">
            <label for="uname">Email</label> <br />
            <Inputs type="email" name="email" />
            <br />
            <label for="psw">Password</label> <br />
            <Inputs type="Password" name="Password" />
            <div>
              <Button>Login</Button>
              <Button>Creat Account</Button>
            </div>
          </form>
        </article>
      </section>
    </main>
  );
};

export default Login;
