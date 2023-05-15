import React from "react";
import Header from "../header/header";
import ButtonMore from "../button/buttonmore";

const Card = () => {
  return (
    <body>
      <main>
        <section>
          <div className="widget-card">
            <div className="widget-card__header">
              <h1>Titlo da Task</h1>
              <h3>Taks by Name </h3>
            </div>
            <p className="widget-card__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quis
              iure corrupti esse! Maiores maxime saepe ex ipsa itaque, at
              dolorum! Sint fugit ea eius nostrum in. Nobis, vero sequi.
            </p>
            <ButtonMore>View Task</ButtonMore>
          </div>
        </section>
      </main>
    </body>
  );
};

export default Card;
