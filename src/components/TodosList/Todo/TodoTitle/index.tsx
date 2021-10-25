import * as React from 'react';
import './style.scss';
import { ITodo } from '../../../../types/index';

interface TodoTitleProps {
  onEditTodo: (arg0: string, arg1: string) => void;
  onDeleteTodo: (arg0: string) => void;
  todo: ITodo;
}

interface TodoTitleState {
  value: string;
  isEdit: boolean;
}

class TodoTitle extends React.Component<TodoTitleProps, TodoTitleState> {
  constructor(props: TodoTitleProps) {
    super(props);
    this.state = {
      value: '',
      isEdit: false,
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: e.target.value,
    });
  };

  openEditor = (e: React.MouseEvent<HTMLElement>) => {
    const newValue = e.target as HTMLElement;
    this.setState({
      value: newValue.textContent,
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

  handlePressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
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
