import React from "react";
import "./Sidebar.css";
import Profile from "./Profile";
import Navigation from "./Navigation";

function Sidebar({ isActive }) {
  return (
    <div className={`sidebar ${isActive && "sidebar__active"}`}>
      <div className="sidebar__container">
        <div className="logo__wrapper">
          {/* Logo image */}
          <img className="header__logo" src="logo.jpg" alt="Logo" />
        </div>
        <Profile />
        <Navigation />
      </div>
    </div>
  );
}

export default Sidebar;
