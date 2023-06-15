import React from "react";
import { FaBell } from "react-icons/fa";

const BellIcon = ({ notificationCount }) => {
  return (
    <div>
      <FaBell />
      {notificationCount > 0 && <span>{notificationCount}</span>}
    </div>
  );
};

export default BellIcon;
