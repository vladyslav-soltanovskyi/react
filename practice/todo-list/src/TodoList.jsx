import React from "react";
import CreateTask from "./CreateTask";
import TaskItem from "./TaskItem";
import api from "./api";

class TodoList extends React.Component {
  state = {
    tasks: []
  }

  componentDidMount() {
    api.getTasks()
      .then(tasks => {
        this.setState({ tasks });
      });    
  }

  handleDeleteTask = (taskId) => {
    api.deleteTask(taskId)
      .then(() => {
        const filteredTasks = this.state.tasks.filter(task => task.id !== taskId);
        this.setState({ tasks: filteredTasks });
      });
  }

  handleCreateTask = (text) => {
    return api.createTask({ text, done: false })
      .then(task => {
        this.setState((state) => ({ tasks: [...state.tasks, task] }));
      });
  }

  handleToggleStatusTask = (taskId) => {
    const { tasks } = this.state;
    const currentStatus = tasks.find(task => task.id === taskId);

    api.updateTask(taskId, { done: !currentStatus.done })
      .then(updatedTask => {
        const updatedTasks = tasks.map(task => task.id === taskId ? updatedTask : task);
        this.setState({ tasks: updatedTasks });
      });
  }

  render() {
    const { tasks } =  this.state;
    const sortedTasks = tasks.slice().sort((a, b) => a.done - b.done);

    return (
      <>
        <h1 className="title">Todo List</h1>
        <main className="todo-list">
          <CreateTask onCreateTask={this.handleCreateTask} />
          <ul className="list">
            {sortedTasks.length > 0 && (
              sortedTasks.map(task => (
                <TaskItem
                  key={task.id}
                  {...task}
                  onDelete={this.handleDeleteTask}
                  onToggleStatus={this.handleToggleStatusTask}
                />
              ))
            )}
          </ul>
        </main>
      </>
    );
  }
}

export default TodoList;