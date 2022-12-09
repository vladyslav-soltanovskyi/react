import React from "react";

const colors = ['coral', 'aqua', 'bisque']

class ColorPicker extends React.Component {
  state = {
    color: ""
  }

  onMouseEnter = (colorName) => {
    const color = colorName[0].toUpperCase() + colorName.slice(1);
    this.setState({ color: color });
  }

  onMouseLeave = () => this.setState({ color: "" });

  render() {
    const { color } = this.state;

    return (
      <div>
        <div className="picker__title">{color}</div>
        <div>
          {colors.map(color => (
            <button
              className={`picker__button picker__button_${color}`}
              onMouseEnter={() => this.onMouseEnter(color)}
              onMouseLeave={this.onMouseLeave}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
