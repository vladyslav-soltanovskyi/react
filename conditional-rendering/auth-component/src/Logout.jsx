import React from "react";

function Logout(props) {
  const { onLogout } = props;

  return (
    <button className="btn logout" onClick={onLogout}>Logout</button>
  );
}

export default Logout;
