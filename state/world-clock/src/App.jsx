import React from "react";
import Clock from "./Clock";


function App() {
  return (
    <>
      <Clock
        offset={-5}
        location="New York"
      />
      <Clock
        offset={2}
        location="Kyiv"
      />      
      <Clock
        offset={0}
        location="London"
      />
    </>
  );
}

export default App;
