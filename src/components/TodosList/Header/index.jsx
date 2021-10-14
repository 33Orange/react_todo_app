import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  height: 50px;
  background: #fff;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.4);
`;
const MainInputContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`;
const MainInput = styled.input`
  width: 95%;
  height: 40px;
  border: none;
  outline: none;
  background: none;
  font-size: 25px;
  &::-webkit-input-placeholder {
    font-weight: 500;
    color: rgba(0, 0, 0, 0.2);
    font-style: italic;
  }
`;
const CompleteAllCheckBox = styled.input`
  left: 0;
  width: 10%;
  border: none;
  position: absolute;
  opacity: 0;
  z-index: -1;
`;

const CompleteAllLabel = styled.label`
  width: 5%;
  margin-left: 3%;
  margin-right: 5%;
  display: inline-flex;
  align-items: center;
  user-select: none;
  &::before {
    content: '❯';
    transform: rotate(90deg);
    opacity: 0.2;
  }
  ${CompleteAllCheckBox}:checked + &::before {
    opacity: 0.65;
  }
`;

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }
  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };
  handleAddTodo = () => {
    this.props.onAddTodo(this.state.value);
    this.setState({ value: '' });
  };
  handleEnterPress = e => {
    if (e.code == 'Enter') {
      this.handleAddTodo();
    }
  };
  render() {
    const todos = [...this.props.todos];
    const isAllDone = !todos.some(item => !item.isDone);
    return (
      <HeaderContainer>
        <MainInputContainer>
          <CompleteAllCheckBox
            type="checkbox"
            id="complete-all"
            checked={isAllDone}
            onChange={this.props.onCompleteAllTodos}
          />
          <CompleteAllLabel htmlFor="complete-all" />
          <MainInput
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            onKeyPress={this.handleEnterPress}
            className="main-input"
            placeholder="What needs to be done?"
          />
        </MainInputContainer>
      </HeaderContainer>
    );
  }
}

export default TodoInput;
