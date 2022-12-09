import React from "react";
import moment from "moment";

const getAge = (date) => moment().diff(new Date(date), "years");

function Greeting({ firstName, lastName, birthDate }) {
  return (
    <div className="greeting">{`My name is ${firstName} ${lastName}. I am ${getAge(birthDate)} years old`}</div>
  );
}

export default Greeting;
