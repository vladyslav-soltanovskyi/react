import React from "react";

class OddNumbers extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.number % 2 === 1;
  }

  render() {
    const { number } = this.props;
    return (
      <div className="number">
        <span className="number__title">Odd number</span>
        <span className="number__value">{number}</span>
      </div>
    );

  }
}

export default OddNumbers;