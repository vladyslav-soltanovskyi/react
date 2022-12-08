import React from "react";

function App() {
  const [count, setCount] = React.useState(0);

  const tick = () => setCount((prevCount) => prevCount + 1);

  React.useEffect(() => {
    const timerId = setInterval(tick, 1000);

    return () => {
      clearInterval(timerId);
    }
  }, []);

  return (
    <div className="seconds">Now is {count}</div>
  );
}

export default App;
