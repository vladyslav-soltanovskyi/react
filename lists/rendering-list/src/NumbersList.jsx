import React from "react";

function NumbersList({ numbers }) {

  return (
    <ul>
      {numbers.map(number => <li>{number}</li>)}
    </ul>
  );
}

export default NumbersList;
