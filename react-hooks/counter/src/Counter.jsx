import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);

  const increase = () => setCount((prevCount) => prevCount + 1);

  const decrease = () => setCount((prevCount) => prevCount - 1);

  return (
    <div className="counter">
      <button className="counter__button" onClick={decrease}>
        -
      </button>
      <span className="counter__value">
        {count}
      </span>
      <button className="counter__button" onClick={increase}>
        +
      </button>
    </div>
  );
}

export default Counter;
