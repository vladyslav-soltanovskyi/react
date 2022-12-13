import React from "react";

class ConnectionStatus extends React.Component {
  state = {
    status: 'online'
  }
  
  onOnline = () => this.setState({ status: 'online' });

  onOffline = () => this.setState({ status: 'offline' });
  
  componentDidMount() {
    window.addEventListener('online', this.onOnline);
    window.addEventListener('offline', this.onOffline);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.onOnline);
    window.removeEventListener('offline', this.onOffline);
  }

  render() {
    const { status } = this.state;
    const className = 'status'.concat(status === 'offline' ? ' status_offline' : '');
    return (
      <div className={className}>{status}</div>
    );
  }
}

export default ConnectionStatus;
