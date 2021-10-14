import React from 'react';
import './style.scss';

class TodoTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      displayText: true,
      displayInput: false,
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
      displayText: false,
      displayInput: true,
    });
    this.props.onHiddenDeleteButton();
  };
  closeEditor = () => {
    this.setState({
      value: '',
      displayText: true,
      displayInput: false,
    });
    this.props.onShowDeleteButton();
  };
  editTodo = () => {
    if (!this.state.displayInput) {
      return;
    }
    const todoId = this.props.todoId;
    const value = this.state.value;
    this.state.value.length > 0
      ? this.props.todoEdit(todoId, value)
      : this.props.onDeleteTodo(todoId);
    this.closeEditor();
  };
  handlePressEnter = e => {
    if (e.code == 'Enter') {
      this.editTodo();
    }
  };
  render() {
    return (
      <div className="todo-title">
        <p
          className={this.props.todoisDone ? 'todo-title__text active' : 'todo-title__text'}
          onDoubleClick={this.openEditor}
          hidden={!this.state.displayText}
        >
          {this.props.todoTitle}
        </p>
        <input
          className="todo-title__editInput"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          onKeyPress={this.handlePressEnter}
          onBlur={this.editTodo}
          hidden={!this.state.displayInput}
          ref={input => input && input.focus()}
        />
      </div>
    );
  }
}

export default TodoTitle;
