import React from "react";

import { task } from "_data/datatask";

const Task = () => {
  return (
    <section>
      <article>
        {task.map((val) => {
          return (
            <div>
              <p>{val.title}</p>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Task;
