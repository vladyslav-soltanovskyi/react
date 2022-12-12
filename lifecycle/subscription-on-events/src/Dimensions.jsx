import React from "react";

class Dimensions extends React.Component {
  state = {
    width: null,
    height: null
  }
  
  onResize = (e) => {
    const { innerHeight, innerWidth } = e.target;
    this.setDimensions(innerWidth, innerHeight);
  }
  
  componentDidMount() {
    window.addEventListener('resize', this.onResize);
    const { innerHeight, innerWidth } = window;
    this.setDimensions(innerWidth, innerHeight);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }
  
  setDimensions = (width, height) => {
    this.setState({ width, height });
    document.title = `${width} x ${height}`;
  }

  render() {
    const { width, height } = this.state;

    return (
      <div class="dimensions">{`${width}px - ${height}px`}</div>
    );
  }
}

export default Dimensions;
