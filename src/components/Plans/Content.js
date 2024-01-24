import React, { useState } from "react";
import "./Content.css";
import PlanType from "./PlanType";
import SubscriptionCard from "../Cards/SubscriptionCard";
import { subscriptions } from "../../data/subscriptions";
import { plans } from "../../data/plans";
import PlanCard from "../Cards/PlanCard";

function Content() {
  const [isMonthly, setIsMonthly] = useState(true);
  return (
    <div className="content__container">
      <h3>Choose a plan that's just right for you!</h3>
      <PlanType isMonthly={isMonthly} setIsMonthly={setIsMonthly} />
      <div className="subscription__card__wrapper">
        {subscriptions.map(
          ({ title, orgPrice, discPrice, features, slug, color }, idx) => (
            <SubscriptionCard
              key={idx}
              title={title}
              orgPrice={isMonthly ? orgPrice : (orgPrice * 12).toFixed(2)}
              discPrice={isMonthly ? discPrice : (discPrice * 12).toFixed(2)}
              features={features}
              slug={slug}
              color={color}
              isMonthly={isMonthly}
            />
          )
        )}
      </div>
      <div className="plan__card__wrapper">
        {plans.map(({ title, note, desc, features, slug, color }, idx) => (
          <PlanCard
            key={idx}
            title={title}
            note={note}
            desc={desc}
            features={features}
            slug={slug}
            color={color}
          />
        ))}
      </div>
    </div>
  );
}

export default Content;
