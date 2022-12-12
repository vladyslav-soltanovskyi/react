import React from "react";

class Clock extends React.Component {

  constructor(props) {
    super(props);

    const { innerHeight, innerWidth } = window;

    this.state = {
      width: innerWidth,
      height: innerHeight
    }
    document.title = `${innerWidth} x ${innerHeight}`;
  }
  
  onResize = (e) => {
    const { innerHeight, innerWidth } = e.target;
    this.setState({ width: innerWidth, height: innerHeight });
    document.title = `${innerWidth} x ${innerHeight}`;
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  render() {
    const { width, height } = this.state;

    return (
      <div class="dimensions">{width}px - {height}px</div>
    );
  }
}

export default Clock;
