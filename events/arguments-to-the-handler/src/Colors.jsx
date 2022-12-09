import React from "react";

class Colors extends React.Component {
  handleChangeBackground = ({ target }) => {
    document.body.style.backgroundColor = target.dataset.color;
  }

  render() {
    return (
      <div className="colors">
        <button
          data-color="red"
          className="colors__button"
          onClick={this.handleChangeBackground}
        />
        <button
          data-color="green"
          className="colors__button"
          onClick={this.handleChangeBackground}
        />
        <button
          data-color="blue"
          className="colors__button"
          onClick={this.handleChangeBackground}
        />
      </div>
    );
  }
}

export default Colors;
