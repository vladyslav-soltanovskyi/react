import React from "react";
import UserForm from "./UserForm";

function Profile ({ userData, onChange }) {
  return (
    <div className="column">
      <UserForm userData={userData} onChange={onChange} />
    </div>
  );
}

export default Profile;
