import React from 'react';
import './style.scss';

class TodoTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isEdit: false,
    };
  }

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  openEditor = e => {
    this.setState({
      value: e.target.textContent,
      isEdit: true,
    });
  };

  editTodo = () => {
    if (!this.state.isEdit) {
      return;
    }
    const todoId = this.props.todo._id;
    const value = this.state.value;
    this.state.value.length > 0
      ? this.props.onEditTodo(todoId, value)
      : this.props.onDeleteTodo(todoId);
    this.setState({
      value: '',
      isEdit: false,
    });
  };

  handlePressEnter = e => {
    if (e.code == 'Enter') {
      this.editTodo();
    }
  };

  render() {
    return (
      <div className="todo-title">
        {this.state.isEdit ? (
          <input
            className="todo-title__editInput"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            onKeyPress={this.handlePressEnter}
            onBlur={this.editTodo}
            ref={input => input && input.focus()}
          />
        ) : (
          <p
            className={this.props.todo.isDone ? 'todo-title__text active' : 'todo-title__text'}
            onDoubleClick={this.openEditor}
          >
            {this.props.todo.value}
          </p>
        )}
      </div>
    );
  }
}

export default TodoTitle;
