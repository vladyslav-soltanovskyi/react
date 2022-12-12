import React from "react";

class Dimensions extends React.Component {
  state = {
    width: null,
    height: null
  }
  
  onResize = (e) => {
    const { innerHeight, innerWidth } = e.target;
    this.setState({ width: innerWidth, height: innerHeight });
    document.title = `${innerWidth} x ${innerHeight}`;
  }
  
  componentDidMount() {
    window.addEventListener('resize', this.onResize);
    const { innerHeight, innerWidth } = window;
  
    this.setState({
      width: innerWidth,
      height: innerHeight
    })

    document.title = `${innerWidth} x ${innerHeight}`;
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

export default Dimensions;
