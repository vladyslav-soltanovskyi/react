import React from "react";

function getCurrentAge(date) {
  return ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000)) | 0;
}

function Greeting({ firstName, lastName, birthDate }) {
  return (
    <div className="greeting">My name is {firstName} {lastName}. I am {getCurrentAge(birthDate)} years old</div>
  );
}

export default Greeting;
