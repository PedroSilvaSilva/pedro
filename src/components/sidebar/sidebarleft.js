import React from "react";

const SidebarLeft = () => {
  return (
    <header className="test1">
      <div className="widget-sidebarleft">
        <div className="widget-sidebarleft__logo">
          <p>
            <img
              className="widget-sidebarleft__user"
              src="https://schedulecreation.com/user.png"
              alt="user"
            />
            Nome User{" "}
          </p>
        </div>
      </div>
    </header>
  );
};

export default SidebarLeft;
