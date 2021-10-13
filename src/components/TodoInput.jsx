import React from 'react';

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }
  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };
  handleAddTodo = () => {
    this.props.addNewTodo(this.state.value);
    this.setState({ value: '' });
  };
  handleEnterPress = e => {
    if (e.code == 'Enter') {
      this.handleAddTodo();
    }
  };

  render() {
    const todos = [...this.props.todos];
    const isAllDone = !todos.some(item => !item.isDone);
    return (
      <div className="main-input-container">
        <input
          type="checkbox"
          className="complete-all"
          checked={isAllDone}
          onChange={() => this.props.todoCompleteAll()}
        />
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          onKeyPress={this.handleEnterPress}
          className="main-input"
          placeholder="What needs to be done?"
        />
      </div>
    );
  }
}

export default TodoInput;
