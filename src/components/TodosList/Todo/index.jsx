import React from 'react';
import TodoTitle from './TodoTitle';
import styled from 'styled-components';
import closeImg from '../../../image/close.png';
import doneImg from '../../../image/checked.png';

const DeleteTodoBtn = styled.button`
  z-index: 10;
  position: absolute;
  right: 5%;
  width: 13px;
  height: 13px;
  background: none;
  background-image: url(${closeImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border: none;
  opacity: 0;
  cursor: pointer;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.9;
  }
  .active {
    display: none;
  }
`;
const TodoContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  justify-content: space-between;
  align-items: center;
  position: relative;
  &:hover ${DeleteTodoBtn} {
    opacity: 0.5;
  }
`;
const CompleteTodoBtn = styled.input`
  margin-left: 2%;
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  vertical-align: middle;
  border: 1px solid rgba(0, 0, 0, 0.3);
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  &:checked {
    border: 1px solid rgba(0, 128, 0, 0.4);
    content: '';
    background-image: url(${doneImg});
    background-position: center;
    background-size: 20px;
    background-repeat: no-repeat;
    opacity: 0.8;
  }
`;

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
      <TodoContainer>
        <CompleteTodoBtn type="checkbox" checked={isDone} onChange={this.handleCompleteTodo} />
        <TodoTitle
          hiddenDeleteButton={this.handleHiddenDeleteButton}
          showDeleteButton={this.handleShowDeleteButton}
          todoDelete={this.props.onDeleteTodo}
          todoId={this.props.todo.id}
          todoEdit={this.props.onEditTodo}
          todoisDone={this.props.todo.isDone}
          todoTitle={this.props.todo.value}
        />
        <DeleteTodoBtn
          onClick={this.handleDeleteTodo}
          hidden={this.state.hiddenDeleteButton}
        ></DeleteTodoBtn>
      </TodoContainer>
    );
  }
}

export default Todo;
