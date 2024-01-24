import React from "react";
import "./Header.css";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

function Header({ isActive, handleClick }) {
  return (
    <header>
      <div>
        <div className="wrapper">
          <button className={`effect1`} onClick={handleClick}>
            <span className={`${isActive ? "active" : ""}`}></span>
          </button>
        </div>
      </div>
      <div className="company__wrapper">
        <div className="company__container">
          {/* Company profile picture */}
          <img
            className="company__img"
            src="company/company-01.jpeg"
            alt="Company Profile"
          />
          {/* Company name */}
          <p>XYZ Enterprises Pvt. Ltd</p>
        </div>
        <div>
          <button className="dropdown__btn">
            <ChevronDownIcon height={20} width={20} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
