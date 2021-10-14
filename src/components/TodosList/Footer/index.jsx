import Counter from './Counter';
import SortButtons from './SortButtonsContainer';
import ClearCompletedTodos from './ClearCompletedTodos';
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 0;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2),
    0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2), 1px 3px 5px rgba(0, 0, 0, 0.4);
`;

class Footer extends React.Component {
  render() {
    const isAnyCompleted = this.props.todos.some(item => item.isDone);
    const countActiveTodos = this.props.todos.filter(item => !item.isDone).length;
    return (
      <FooterContainer>
        <Counter count={countActiveTodos} />
        <SortButtons
          activeFilter={this.props.activeFilter}
          onChangeFilter={this.props.onChangeFilter}
        />
        {isAnyCompleted ? (
          <ClearCompletedTodos onClearCompletedTodo={this.props.onClearCompletedTodo} />
        ) : null}
      </FooterContainer>
    );
  }
}

export default Footer;
