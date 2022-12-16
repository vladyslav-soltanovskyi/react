import React from "react";
import PropTypes  from "prop-types";

class CreateTask extends React.Component {
  state = {
    text: ''
  }

  handleChangeText = (e) => this.setState({ text: e.target.value }); 

  handleCreateTask = () => {
    const { text } = this.state;
    
    this.props.onCreateTask(text)
      .then(() => {
        this.setState({ text: '' });
      });
  }

  render() {
    const { text } = this.state;
    return (
      <div className="create-task">
        <input
          className="create-task__input"
          type="text"
          value={text}
          onChange={this.handleChangeText}
        />
        <button
          className="btn create-task__btn"
          onClick={this.handleCreateTask}
        >
          Create
        </button>
      </div>
    );
  }
}

CreateTask.propTypes = {
  onCreateTask: PropTypes.func
}

export default CreateTask;