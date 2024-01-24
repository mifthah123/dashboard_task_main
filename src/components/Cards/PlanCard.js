import React from "react";
import {
  UserIcon,
  ChevronRightIcon,
  CloudIcon,
  EnvelopeIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import "./PlanCard.css";

function PlanCard({ title, note, desc, features, color, slug }) {
  return (
    <div className="plan__card">
      <div>
        <p className="note" style={{ backgroundColor: color }}>
          {note}
        </p>
        <h4 className="title">{title}</h4>
        <p className="desc">{desc}</p>
        <a
          href={`/${slug}`}
          className="plan__link"
          style={{ backgroundColor: color }}
        >
          Get Started <ChevronRightIcon height={15} width={15} />
        </a>
      </div>
      <div className="plan__feat__container">
        <div>
          <p className="plan__card__feat__title">What you'll get:</p>
          <div className="plan__card__feat">
            <UserIcon height={17} width={17} color="#000" />
            <p>Upto {features.users} Users</p>
          </div>
          {features.storage !== undefined && (
            <div className="plan__card__feat">
              <CloudIcon height={17} width={17} color="#000" />
              <p>Upto {features.storage}GB Storage</p>
            </div>
          )}
          {features.support !== undefined && (
            <div className="plan__card__feat">
              <EnvelopeIcon height={17} width={17} color="#000" />
              <p>{features.support}</p>
            </div>
          )}
          <div className="plan__card__feat">
            <div>
              <CheckIcon height={17} width={17} color="#000" />
            </div>
            <p>{features.check}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanCard;
