import React from 'react';

class Todo extends React.Component {
  render() {
    return (
      <div className="todo">
        <input
          type="checkbox"
          className="todo-complete"
          checked={!!this.props.todo.isDone}
          onChange={() => this.props.todoComplete(this.props.todo)}
        ></input>
        <p className="todo-title">
          {!this.props.todo.isDone ? this.props.todo.value : <s>{this.props.todo.value}</s>}
        </p>
        <button
          onClick={() => this.props.todoDelete(this.props.todo.id)}
          className="todo-delete"
        ></button>
      </div>
    );
  }
}

export default Todo;
