import React from "react";

class Life extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor: good place to create state");
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.setState({ count: this.state.count + 1 }), 1000);
    console.log("componentDidMount: API calls, subscriptions");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate(nextProps, nextState): decide to render or not to render");
    return this.state.count > 0;
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate(prevProps, prevState): some updates based on new props");
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
    console.log("componentWillUnmount(): cleanup before DOM related to component will be removed");
  }

  render() {
    console.log("return React element to build DOM");
    return (
      <div className="life">Life Component</div>
    );
  }
}

export default Life;
