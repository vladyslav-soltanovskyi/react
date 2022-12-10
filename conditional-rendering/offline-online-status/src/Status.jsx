import React from "react";
import Offline from "./Offline";
import Online from "./Online";

function Status({ isOnline }) {
  return (
    isOnline
      ? <Online />
      : <Offline />
  );
}

export default Status;
