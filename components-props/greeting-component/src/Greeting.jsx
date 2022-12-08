import React from "react";

function getAge(date) {
  var today = new Date();
  var birthDate = new Date(date);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}

function Greeting({ firstName, lastName, birthDate }) {
  return (
    <div className="greeting">My name is {firstName} {lastName}. I am {getCurrentAge(birthDate)} years old</div>
  );
}

export default Greeting;
