import React from "react";

const colors = ['coral', 'aqua', 'bisque']

class ColorPicker extends React.Component {
  state = {
    color: ""
  }

  onMouseEnter = ({ target }) => {
    const index = colors.findIndex(color => target.className.includes(color));
    const color = colors[index][0].toUpperCase() + colors[index].slice(1);
    this.setState({ color: color });
  }

  onMouseLeave = () => this.setState({ color: "" });

  render() {
    const { color } = this.state;

    return (
      <div>
        <div className="picker__title">{color}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
          />
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
          />
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
          />
        </div>
      </div>
    );
  }
}

export default ColorPicker;
