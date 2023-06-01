import React from "react";
import { task } from "../../../organisms/data/datatask";
import { ContainerCard, ContinerSection } from "./card.style";

const Card = () => {
  return (
    <body>
      <main>
        <ContinerSection>
          {task.map((val) => {
            return (
              <ContainerCard>
                <ul>
                  <li>Id: {val.key}</li>
                  <li>Title: {val.title}</li>
                  <li>Creator: {val.creator}</li>
                  <li>Department: {val.departament}</li>
                  <button>View Task</button>
                </ul>
              </ContainerCard>
            );
          })}
        </ContinerSection>
      </main>
    </body>
  );
};

export default Card;
