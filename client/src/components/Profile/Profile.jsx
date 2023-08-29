import React from "react";
import { PiUserCircleDuotone } from "react-icons/pi";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="profile">
      <div className="profile-titile">
        <div className="name-icon">
          <PiUserCircleDuotone />
        </div>
        <p>Profile</p>
      </div>

      <div className="profile-page">
        <div className="profile-firstname">
          <p>First Name: {user?.firstName}</p>
        </div>
        <div className="profile-lastname">
          <p>Last Name: {user?.lastName}</p>
        </div>
        <div className="profile-email">
          <p>Email: {user?.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
