import React from "react";
import {
  UserIcon,
  ChevronRightIcon,
  CloudIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { PlayIcon } from "@heroicons/react/24/solid";
import "./SubscriptionCard.css";

function SubscriptionCard({
  title,
  orgPrice,
  discPrice,
  features,
  color,
  slug,
  isMonthly,
}) {
  return (
    <div className="sub__card">
      <h2>{title}</h2>
      <div className="org__price">
        <p>
          ${orgPrice}/{isMonthly ? "mo" : "yr"}
        </p>
        <div className="strike__org__price"></div>
      </div>
      <p className="disc__price">
        ${discPrice}/{isMonthly ? "mo" : "yr"}
      </p>
      <a
        href={`/${slug}`}
        className="sub__card__start"
        style={{ backgroundColor: color }}
      >
        Get Started <ChevronRightIcon height={15} width={15} />
      </a>
      {/* Line */}
      <div className="line"></div>
      {/* Features */}
      <div>
        <p className="sub__card__feat__title">What you'll get:</p>
        <div className="sub__card__feat">
          <UserIcon height={17} width={17} color="#000" />
          <p>Upto {features.users} Users</p>
        </div>
        <div className="sub__card__feat">
          <CloudIcon height={17} width={17} color="#000" />
          <p>Upto {features.storage}GB Storage</p>
        </div>
        <div className="sub__card__feat">
          <EnvelopeIcon height={17} width={17} color="#000" />
          <p>{features.support}</p>
        </div>
      </div>
      <div>
        <a href={`/${slug}`} className="explore">
          EXPLORE FEATURES{" "}
          <PlayIcon
            height={14}
            width={14}
            color={color}
            style={{ marginLeft: "5px" }}
          />
        </a>
      </div>
    </div>
  );
}

export default SubscriptionCard;
