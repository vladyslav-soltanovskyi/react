import React from 'react';
import './avatar.scss';

function Avatar({ avatarUrl, name }) {
  return (
    <img className="avatar" src={avatarUrl} alt={name} />
  );
}

export default Avatar;
