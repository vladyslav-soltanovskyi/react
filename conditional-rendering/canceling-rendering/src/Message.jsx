import React from "react";

function Message({ text }) {
  return (
    text && <div className="message">{text}</div>
  );
}

export default Message;
