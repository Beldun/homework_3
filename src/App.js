import React from 'react';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      inputValue: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleAddTask = () => {
    const { inputValue, tasks } = this.state;
    if (inputValue.trim() !== '') {
      this.setState({
        tasks: [...tasks, inputValue],
        inputValue: ''
      });
    }
  };

  render() {
    const { tasks, inputValue } = this.state;

    return (
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          value={inputValue}
          onChange={this.handleInputChange}
          placeholder="Enter a task"
        />
        <button onClick={this.handleAddTask}>Add Task</button>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoApp;
