import React from "react";
import './counter.scss'

function Counter({ start, interval }) {
  const [count, setCount] = React.useState(start);

  const tick = () => setCount((prevCount) => prevCount + 1);

  React.useEffect(() => {
    const timerId = setInterval(tick, interval);

    return () => {
      clearInterval(timerId);
    }
  }, []);

  return (
    <div className="counter">{count}</div>
  );
}

export default Counter;
