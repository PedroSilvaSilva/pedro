import React from "react";
import Button from "../../components/atoms/button/button";
import Inputs from "../../components/atoms/input/input";

const Header = () => {
  return (
    <div className="widget-container-Head">
      <div>
        <div className="widget-container-Head__form">
          <form action="" className="widget-container-Head__search">
            <Inputs
              type="pesquisa"
              name="pesquisa"
              placeholder="Search your Tasks here..."
            />
          </form>
          <img
            className="widget-container-Head__imag1"
            src="https://schedulecreation.com/notificacao.png"
            alt="logo"
          />
        </div>

        <div className="widget-container-Head__description">
          <h1>Tasks.....</h1>
          <p> Aqui ...... </p>
        </div>
        <div className="widget-container-Head__btnc">
          <Button>Creat New Task</Button>
        </div>
      </div>

      <nav className="widget-container-Head__head">
        <ul className="widget-container-Head__list">
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
    </div>
  );
};

export default Header;
