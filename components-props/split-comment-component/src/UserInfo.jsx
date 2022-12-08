import React from 'react';
import Avatar from "./Avatar";
import './user-info.scss';

function UserInfo({ user }) {
  return (
    <div className="user-info">
      <Avatar avatarUrl={user.avatarUrl} name={user.name} />
      <div className="user-info__name">{user.name}</div>
    </div>
  );
}

export default UserInfo;
