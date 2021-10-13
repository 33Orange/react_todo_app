import React from 'react';

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.isAllDone = !this.props.todos.some(item => !item.isDone);
  }
  UNSAFE_componentWillUpdate() {
    const todos = [...this.props.todos];
    this.isAllDone = !todos.some(item => !item.isDone);
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
    return (
      <div className="main-input-container">
        <input
          type="checkbox"
          className="complete-all"
          checked={this.isAllDone}
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
