import React from "react";
import Dialog from "./Dialog";

class App extends React.Component {
  state = {
    isOpen: false
  }

  onOpen = () => this.setState({ isOpen: true });

  onClose = () => this.setState({ isOpen: false });

  render() {
    const { isOpen } = this.state;
    return (
      <div className="app">
        <button className="btn" onClick={this.onOpen}>Show dialog</button>
        {isOpen && (
          <Dialog
            title="Recommendation"
            onClose={this.onClose}
          >
            <p>Use immutable array methods to work with data. It will help to avoid bugs</p>
          </Dialog>
        )}
      </div>
    );
  }
}

export default App;
