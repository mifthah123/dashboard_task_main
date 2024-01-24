import React from "react";
import "./Profile.css";
import ChevronRightIcon from "@heroicons/react/24/outline/ChevronRightIcon";

function Profile() {
  return (
    <div className="profile">
      {/* Pofile picture */}
      <img
        className="profile__picture"
        src="profile/john-doe.jpg"
        alt="Profile"
      />
      {/* Username */}
      <div className="username__wrapper">
        <h4>Ram Mohan</h4>
        <ChevronRightIcon height={15} width={15} color="#a033ff" />
      </div>
      {/* Mail id */}
      <p>rammohan2@gmail.com</p>
    </div>
  );
}

export default Profile;
