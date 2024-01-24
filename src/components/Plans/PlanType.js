import React from "react";
import "./PlanType.css";

function PlanType({ isMonthly, setIsMonthly }) {
  return (
    <div className="plan__type__container">
      <div className="plan__type__wrapper">
        <button
          onClick={() => setIsMonthly(true)}
          className={`plan__type__btn ${
            isMonthly ? "plan__type__btn__active" : "plan__type__btn__unfocused"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setIsMonthly(false)}
          className={`plan__type__btn annual__type ${
            !isMonthly
              ? "plan__type__btn__active"
              : "plan__type__btn__unfocused"
          }`}
        >
          Annually <span>-10%</span>
        </button>
      </div>
    </div>
  );
}

export default PlanType;
