import * as React from 'react';
import TodoTitle from './TodoTitle';
import './style.scss';
import { ITodo } from '../../../types/index';

interface TodoProps {
  todo: ITodo;
  onCompletetodo: (arg0: Object) => void;
  onDeleteTodo: (arg0: string) => void;
  onEditTodo: (arg0: string, arg1: string) => void;
}

class Todo extends React.Component<TodoProps> {
  handleCompleteTodo = () => {
    this.props.onCompletetodo(this.props.todo);
  };
  handleDeleteTodo = () => {
    this.props.onDeleteTodo(this.props.todo._id);
  };
  render() {
    return (
      <div className="todo">
        <input
          className="todo__complete"
          type="checkbox"
          checked={this.props.todo.isDone}
          onChange={this.handleCompleteTodo}
        />
        <TodoTitle
          todo={this.props.todo}
          onDeleteTodo={this.props.onDeleteTodo}
          onEditTodo={this.props.onEditTodo}
        />
        <button className="todo__delete" onClick={this.handleDeleteTodo}></button>
      </div>
    );
  }
}

export default Todo;
