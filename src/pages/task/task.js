import React from "react";

import { task } from "_data/datatask";

const Task = () => {
  return (
    <section>
      <article>
        {task.map((val, key) => {
          return <div>{val.creator}</div>;
        })}
      </article>
    </section>
  );
};

export default Task;
