import React from "react";

class Toggler extends React.Component {
  state = {
    status: false
  }

  onClick = () => this.setState({ status: !this.state.status });

  render() {
    const { status } = this.state;

    return (
      <button class="toggler" onClick={this.onClick}>{status ? 'On' : 'Off'}</button>
    );
  }
}

export default Toggler;
