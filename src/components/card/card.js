import React from "react";
import { task } from "../../organisms/data/datatask";
import { ContainerCard } from "./card.style";
const Card = () => {
  return (
    <body>
      <main>
        <section>
          {task.map((val) => {
            return (
              <ContainerCard>
                <ul>
                  <li>Id: {val.key}</li>
                  <li>Creator: {val.creator}</li>
                  <li>Department: {val.departament}</li>
                </ul>
              </ContainerCard>
            );
          })}
        </section>
      </main>
    </body>
  );
};

export default Card;
