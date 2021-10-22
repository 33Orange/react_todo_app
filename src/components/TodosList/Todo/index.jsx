import React from 'react';
import TodoTitle from './TodoTitle';
import './style.scss';

class Todo extends React.Component {
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
