import React from "react";
import Button from "../components/button/button";
import Inputs from "../components/inputs/inputs";

const Creataccount = () => {
  return (
    <body>
      <main>
        <section>
          <img src="https://schedulecreation.com/logo.png" alt="logo" />
          <article className="widget-login">
            <h2 className="widget-login__title">Creat Account </h2>
            <form action="">
              <Inputs type="name" name="uname" placeholder="Name" />
              <Inputs type="Email" name="Email" placeholder="Email" />
              <Inputs type="Password" name="Password" placeholder="Password" />
              <Button>Creat Account</Button>
            </form>
          </article>
        </section>
      </main>
    </body>
  );
};

export default Creataccount;
