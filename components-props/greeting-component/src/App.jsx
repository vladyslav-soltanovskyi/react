import React from "react";
import Greeting from "./Greeting";

function App() {
  return (
    <Greeting
      firstName="John"
      lastName="Doe"
      birthDate={new Date(2005, 0, 1)}
    />
  );
}

export default App;
