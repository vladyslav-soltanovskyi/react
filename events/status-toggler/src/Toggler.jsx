import React from "react";

class Toggler extends React.Component {
  state = {
    isActive: false
  }

  onClick = () => this.setState({ isActive: !this.state.isActive });

  render() {
    const { isActive } = this.state;

    return (
      <button class="toggler" onClick={this.onClick}>{isActive ? "On" : "Off"}</button>
    );
  }
}

export default Toggler;
