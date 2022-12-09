import React from "react";
import moment from "moment";

const getDate = (date) => moment(date).format("DD MMM YY");

function Profile({ userData }) {
  return (
    <div className="profile">
      <div className="profile__name">{userData.firstName} {userData.lastName}</div>
      <div className="profile__birth">Was born {getDate(userData.birthDate)} in {userData.birthPlace}</div>
    </div>
  );
}

export default Profile;
