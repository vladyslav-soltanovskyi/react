import React from "react";
import Mailbox from "./Mailbox";


function App() {
  return (
    <Mailbox unreadMessages={['a', 'b']} />
  );
}

export default App;
