import React from 'react';
import TodoTitle from './TodoTitle';

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
        <TodoTitle
          todoDelete={this.props.todoDelete}
          todoId={this.props.todo.id}
          todoEdit={this.props.todoEdit}
          todoisDone={this.props.todo.isDone}
          todoTitle={this.props.todo.value}
        />
        <button
          onClick={() => this.props.todoDelete(this.props.todo.id)}
          className="todo-delete"
        ></button>
      </div>
    );
  }
}

export default Todo;
