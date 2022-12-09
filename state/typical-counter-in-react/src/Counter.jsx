import React from "react";
import './counter.scss'

class Counter extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      count: props.start
    }
  }
  
  tick = () => this.setState({ count: this.state.count + 1 });

  componentDidMount() {
    this.timerId = setInterval(this.tick, this.props.interval);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { count } = this.state;
    return (
      <div className="counter">{count}</div>
    );
  }
}

export default Counter;
