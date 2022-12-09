import React from "react";

const colors = {
  red: "#f00",
  green: "#0f0",
  blue: "#00f"
}

class Colors extends React.Component {
  handleChangeBackground = (color) => {
    document.body.style.backgroundColor = color;
  }

  render() {
    return (
      <div className="colors">
        <button
          style={{ backgroundColor: colors.red }}
          className="colors__button"
          onClick={() => this.handleChangeBackground(colors.red)}
        />
        <button
          style={{ backgroundColor: colors.green }}
          className="colors__button"
          onClick={() => this.handleChangeBackground(colors.green)}
        />
        <button
          style={{ backgroundColor: colors.blue }}
          className="colors__button"
          onClick={() => this.handleChangeBackground(colors.blue)}
        />
      </div>
    );
  }
}

export default Colors;
