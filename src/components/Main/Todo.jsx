import React from 'react';
import TodoTitle from './TodoTitle';
import '../../styles/Main/Todo.scss';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hiddenDeleteButton: false,
    };
  }
  handleHiddenDeleteButton = () => {
    this.setState({ hiddenDeleteButton: true });
  };
  handleShowDeleteButton = () => {
    this.setState({ hiddenDeleteButton: false });
  };
  handleCompleteTodo = () => {
    this.props.todoComplete(this.props.todo);
  };
  handleDeleteTodo = () => {
    this.props.todoDelete(this.props.todo.id);
  };
  render() {
    const isDone = this.props.todo.isDone;
    return (
      <div className="todo">
        <input
          type="checkbox"
          className="todo-complete"
          checked={isDone}
          onChange={this.handleCompleteTodo}
        ></input>
        <TodoTitle
          hiddenDeleteButton={this.handleHiddenDeleteButton}
          showDeleteButton={this.handleShowDeleteButton}
          todoDelete={this.props.todoDelete}
          todoId={this.props.todo.id}
          todoEdit={this.props.todoEdit}
          todoisDone={this.props.todo.isDone}
          todoTitle={this.props.todo.value}
        />
        <button
          onClick={this.handleDeleteTodo}
          className="todo-delete"
          hidden={this.state.hiddenDeleteButton}
        ></button>
      </div>
    );
  }
}

export default Todo;
