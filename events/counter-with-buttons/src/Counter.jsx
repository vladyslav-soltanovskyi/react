import React from "react";

class GoodButton extends React.Component {
  state = {
    counter: 0
  }

  increase = () => this.setState({ counter: this.state.counter + 1 });

  decrease = () => this.setState({ counter: this.state.counter - 1 });

  render() {
    const { counter } = this.state;

    return (
      <div className="counter">
        <button data-action="decrease" className="counter__button" onClick={this.decrease}>-</button>
        <span className="counter__value">{counter}</span>
        <button data-action="increase" className="counter__button" onClick={this.increase}>+</button>
      </div>
    );
  }
}

export default GoodButton;
