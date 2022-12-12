import React from "react";
import Life from "./Life";


class App extends React.Component {
  state = {
    number: 0
  }

  increase = () => this.setState({ number: this.state.number + 1 });
  
  render() {
    return (
      <>
        <button onClick={this.increase}>+</button>
        <Life number={this.state.number} />
      </>
    );
  }
}

export default App;
