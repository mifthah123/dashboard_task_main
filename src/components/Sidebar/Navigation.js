import React from "react";
import "./Navigation.css";
import { navigationLinks } from "./Links";
import { useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className="navigation">
      {navigationLinks.map(({ title, icon, slug }, idx) => (
        <a key={idx} href="/" className="nav__link">
          <div
            className={`nav__element ${
              slug === path ? "nav__active" : "nav__unfocused"
            }`}
          >
            {icon}
            <p>{title}</p>
          </div>
        </a>
      ))}
      <div className="logout">
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Navigation;
