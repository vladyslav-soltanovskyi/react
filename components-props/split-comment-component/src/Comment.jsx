import React from 'react';
import UserInfo from "./UserInfo";
import './comment.scss';
import moment from 'moment';

const formatDate = date => moment(date).format('DD MMM YYYY');

function Comment({ author, text, date }) {
  return (
    <div className="comment">
      <UserInfo user={author} />
      <div className="comment__text">{text}</div>
      <div className="comment__date">{formatDate(date)}</div>
    </div>
  );
}

export default Comment;
