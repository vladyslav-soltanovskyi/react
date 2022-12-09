import React from "react";
import './clock.scss'

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

class Clock extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      date: getTimeWithOffset(props.offset)
    }
  }
  
  tick = () => this.setState({ date: getTimeWithOffset(this.props.offset) });

  componentDidMount() {
    this.timerId = setInterval(this.tick, this.props.interval);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { date } = this.state;
    const { location } = this.props;
    return (
      <div className="clock">
        <div className="clock__location">{location}</div>
        <div className="clock__time">{date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}</div>
      </div>

    );
  }
}

export default Clock;
