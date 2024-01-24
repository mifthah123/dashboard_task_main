import React from "react";
import "./Plans.css";
import Header from "./Header";
import Content from "./Content";

function Plans({ isActive, handleClick }) {
  return (
    <div className="plan__container">
      <Header isActive={isActive} handleClick={handleClick} />
      <Content />
    </div>
  );
}

export default Plans;
