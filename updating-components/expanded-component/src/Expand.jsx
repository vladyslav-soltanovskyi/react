import React from "react";

class Expand extends React.Component {
  state = {
    isOpen: false
  }

  onToggle = () => this.setState((state) => ({ isOpen: !state.isOpen }));

  render() {
    const { isOpen } = this.state;
    const { children, title } = this.props;
    return (
      <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button
          className="expand__toggle-btn"
          onClick={this.onToggle}
        >
          <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
        </button>
      </div>
      <div className="expand__content">
        {isOpen && children}
      </div>
    </div>
    );
  }
}

export default Expand;