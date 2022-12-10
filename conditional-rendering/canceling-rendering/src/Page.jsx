import React from "react";
import Message from "./Message";



class Auth extends React.Component {
  state = {
    text: ""
  }

  handleChangeText = (text) => this.setState({ text });

  render() {
    const { text } = this.state;
    
    return (
      <div className="page">
        <Message text={text} />
        <div className="actions">
          <button
            className="btn"
            onClick={() => this.handleChangeText('Hello, world!')}
          >
            Text 1
          </button>
          <button
            className="btn"
            onClick={() => this.handleChangeText('Another exciting text.')}
          >
            Text 2
          </button>
          <button
            className="btn"
            onClick={() => this.handleChangeText('')}
          >
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default Auth;
