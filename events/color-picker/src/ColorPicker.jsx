import React from "react";

class ColorPicker extends React.Component {
  state = {
    color: false
  }

  onMouseEnter = ({ target }) => {
    const className = "picker__button_";
    const index = target.className.indexOf(className);
    let color = target.className.slice(index + className.length);
    color = color[0].toUpperCase() + color.slice(1);
    this.setState({ color: color });
  }

  render() {
    const { color } = this.state;

    return (
      <div>
        <div class="picker__title">{color}</div>
        <div>
          <button
            class="picker__button picker__button_coral"
            onMouseEnter={this.onMouseEnter}
          />
          <button
            class="picker__button picker__button_aqua"
            onMouseEnter={this.onMouseEnter}
          />
          <button
            class="picker__button picker__button_bisque"
            onMouseEnter={this.onMouseEnter}
          />
        </div>
      </div>
    );
  }
}

export default ColorPicker;
