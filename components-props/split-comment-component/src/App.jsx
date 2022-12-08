import React from "react";
import Comment from "./Comment";

function App() {
  return (
    <Comment
      text="Hello, world!"
      date={new Date()}
      author={{
        name: "Tom",
        avatarUrl: "https://images.prismic.io/mystique/5d7c09b9-40e5-4254-ae1c-2c1cb59aa898_IMG3.jpg?auto=compress,format"
      }}
    />
  );
}

export default App;
