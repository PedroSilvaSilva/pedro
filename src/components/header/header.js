import React from "react";
import Button from "../button/button";
import Inputs from "../inputs/inputs";
import Card from "../card/card";

const Header = () => {
  return (
    <div className="widget-container">
      <div>
        <div className="widget-container__form">
          <form action="" className="widget-container__search">
            <Inputs
              type="pesquisa"
              name="pesquisa"
              placeholder="Search your Tasks here..."
            />
          </form>
          <img
            className="widget-container__imag1"
            src="https://schedulecreation.com/notificacao.png"
            alt="logo"
          />
        </div>

        <div className="widget-container__description">
          <h1>Tasks.....</h1>
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
              All Tasks 1
            </a>
          </li>
          <li>
            <a href="#" title="">
              Pending 2
            </a>
          </li>
          <li>
            <a href="#" title="">
              In Progress 3
            </a>
          </li>
          <li>
            <a href="#" title="">
              Completed 4
            </a>
          </li>
        </ul>
      </nav>
      <Card />
    </div>
  );
};

export default Header;
