import React from 'react';
import TodoTitle from './TodoTitle';
import './style.scss';

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
    this.props.onCompletetodo(this.props.todo);
  };
  handleDeleteTodo = () => {
    this.props.onDeleteTodo(this.props.todo.id);
  };
  render() {
    const isDone = this.props.todo.isDone;
    return (
      <div className="todo">
        <input
          className="todo__complete"
          type="checkbox"
          checked={isDone}
          onChange={this.handleCompleteTodo}
        />
        <TodoTitle
          onHiddenDeleteButton={this.handleHiddenDeleteButton}
          onShowDeleteButton={this.handleShowDeleteButton}
          onDeleteTodo={this.props.onDeleteTodo}
          todoId={this.props.todo.id}
          todoEdit={this.props.onEditTodo}
          todoisDone={this.props.todo.isDone}
          todoTitle={this.props.todo.value}
        />
        <button
          className="todo__delete"
          onClick={this.handleDeleteTodo}
          hidden={this.state.hiddenDeleteButton}
        ></button>
      </div>
    );
  }
}

export default Todo;
