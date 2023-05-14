import React from "react";

const Header = () => {
  return (
    <div className="widget-container">
      <form action="">
        <input type="pesquisa" />
      </form>
      <nav className="widget-container__head">
        <ul className="widget-container__list">
          <li>
            <a href="" title="">
              All Tasks
            </a>
          </li>
          <li>
            <a href="" title="">
              Pending
            </a>
          </li>
          <li>
            <a href="" title="">
              In Progress
            </a>
          </li>
          <li>
            <a href="" title="">
              Completed
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
