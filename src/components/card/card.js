import React from "react";
import Header from "../header/header";

const Card = () => {
  return (
    <body>
      <main>
        <section>
          <div className="widget-card">
            <div className="widget-card__header">
              <img src="https://schedulecreation.com/code.png" alt="Task" />
              <h3>Taks by Name </h3>
            </div>
            <p className="widget-card__description">
              Et gravida sit at faucibus nulla dolor enim pretium ac. Tincidunt
              egestas et purus malesuada nec facilisi purus. Venenatis libero
              fringilla dictum eu tellus egestas mi.
            </p>
            <a href="" class="btn btn--inverted" title="">
              Saiba Mais
            </a>
          </div>
        </section>
      </main>
    </body>
  );
};

export default Card;
