import React from "react";
import Button from "../button/button";
import Inputs from "../inputs/inputs";
import Card from "../card/card";

const Header = () => {
  return (
    <div className="widget-container">
      <div>
        <form action="" className="widget-container__search">
          <Inputs
            type="pesquisa"
            name="pesquisa"
            placeholder="Search your Tasks here..."
          />
        </form>
        <div className="widget-container__description">
          <p>sinal aviso</p>
          <h1>Tasks Nome do que for select</h1>
          <p>Tuas tasks são as seguintes </p>
        </div>
        <div className="widget-container__btnc">
          <Button>Creat New Task</Button>
        </div>
      </div>

      <nav className="widget-container__head">
        <ul className="widget-container__list">
          <li>
            <a href="#" title="">
              All Tasks
            </a>
          </li>
          <li>
            <a href="#" title="">
              Pending
            </a>
          </li>
          <li>
            <a href="#" title="">
              In Progress
            </a>
          </li>
          <li>
            <a href="#" title="">
              Completed
            </a>
          </li>
        </ul>
      </nav>
      <Card />
    </div>
  );
};

export default Header;
