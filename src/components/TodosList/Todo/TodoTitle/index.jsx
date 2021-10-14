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
    this.props.hiddenDeleteButton();
  };
  closeEditor = () => {
    this.setState({
      value: '',
      displayText: true,
      displayInput: false,
    });
    this.props.showDeleteButton();
  };
  editTodo = () => {
    if (!this.state.displayInput) {
      return;
    }
    const todoId = this.props.todoId;
    const value = this.state.value;
    this.props.todoEdit(todoId, value);
    this.closeEditor();
  };
  handlePressEnter = e => {
    if (e.code == 'Enter') {
      this.editTodo();
    }
  };
  render() {
    return (
      <div className="todo-title-cont">
        <p
          className={this.props.todoisDone ? 'todo-title active' : 'todo-title'}
          onDoubleClick={this.openEditor}
          hidden={!this.state.displayText}
        >
          {this.props.todoTitle}
        </p>
        <input
          className="todo-title-edit"
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
