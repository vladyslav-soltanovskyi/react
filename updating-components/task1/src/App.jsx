import React from "react";
import Numbers from "./Numbers";
import EvenNumbers from "./EvenNumbers";
import OddNumbers from "./OddNumbers";

class App extends React.Component {
  state = {
    number: 0
  }

  increase = () => this.setState({ number: this.state.number + 1 });

  componentDidMount() {
    this.timerId = setInterval(this.increase, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { number } = this.state;
    return (
      <div className="app">
        <OddNumbers number={number} />
        <EvenNumbers number={number} />
        <Numbers number={number} title="All numbers" />
        <Numbers number={17} title="Just 17" />
      </div>
    );
  }
}

export default App;
