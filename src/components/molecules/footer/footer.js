import React from "react";
import { Link } from "react-router-dom";
import { SidebardataFooter } from "_data/sidebardata";
import { ContainerFooter } from "_components/molecules/footer/footer.style";
const Footer = () => {
  return (
    <ContainerFooter>
      <nav>
        <ul>
          {SidebardataFooter.map((item, index) => (
            <li key={index}>
              <Link
                id={window.location.pathname === item.link ? "active" : ""}
                onClick={() => {
                  window.location.pathname = item.link;
                }}
                to={item.link}
              >
                {item.icon}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </ContainerFooter>
  );
};

export default Footer;
