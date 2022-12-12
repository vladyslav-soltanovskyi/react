import React from "react";

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

class Clock extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }
  
  resize = () => {
    const height = window.innerHeight;
    const width = window.innerWidth;
    document.title = `${width} x ${height}`;
    this.setState({ width, height });
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  render() {
    const { width, height } = this.state;
    return (
      <div class="dimensions">{width}px - {height}px</div>
    );
  }
}

export default Clock;
