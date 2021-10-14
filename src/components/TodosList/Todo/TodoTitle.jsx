import React from 'react';
import styled from 'styled-components';

const TodoTitleContainer = styled.div`
  width: 87%;
  height: 100%;
  position: relative;
`;
const TitleText = styled.p`
  position: absolute;
  left: 0;
  top: 10px;
  font-size: 25px;
  width: 100%;
  opacity: 0.8;
  &.active {
    opacity: 0.5;
    text-decoration: line-through;
  }
`;
const TitleEditInput = styled.input`
  font-size: 25px;
  font-weight: 400;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: none;
  background: none;
  &:focus {
    outline: 1px solid rgba(0, 0, 0, 0.4);
    box-shadow: inset 1px 1px 10px rgba(0, 0, 0, 0.2);
  }
`;
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
      <TodoTitleContainer>
        <TitleText
          className={this.props.todoisDone ? 'active' : null}
          onDoubleClick={this.openEditor}
          hidden={!this.state.displayText}
        >
          {this.props.todoTitle}
        </TitleText>
        <TitleEditInput
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          onKeyPress={this.handlePressEnter}
          onBlur={this.editTodo}
          hidden={!this.state.displayInput}
          ref={input => input && input.focus()}
        />
      </TodoTitleContainer>
    );
  }
}

export default TodoTitle;
