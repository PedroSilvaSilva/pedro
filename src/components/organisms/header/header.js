import React, { useEffect, useState } from "react";

import { Input } from "_components/atoms";

import { task } from "_data/datatask";

const Header = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fecthItemById = () => {
      const key = 2;
      const foundItem = task.find((item) => item.key === key);
      if (foundItem) {
        setItem(foundItem);
      } else {
        alert("Item Nao encontrado");
      }
      setLoading(false);
    };
    fecthItemById();
  }, []);
  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!item) {
    return <div>Item não encontrado.</div>;
  }

  return (
    <section>
      <div>
        <Input />
      </div>
      <h1>Tasks</h1>
      <h3>Make your tasks</h3>
      <article>
        <h2>{item.key}</h2>
        <h2>{item.title}</h2>
        <h2>{item.creator}</h2>
      </article>
    </section>
  );
};

export default Header;
