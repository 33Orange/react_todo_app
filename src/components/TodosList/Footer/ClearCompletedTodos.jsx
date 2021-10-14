import React from 'react';
import styled from 'styled-components';

const ClearContainer = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: 3%;
`;
const ClearBtn = styled.span`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
class ClearCompletedTodos extends React.Component {
  render() {
    return (
      <ClearContainer>
        <ClearBtn onClick={this.props.onClearCompletedTodo}>Clear completed</ClearBtn>
      </ClearContainer>
    );
  }
}

export default ClearCompletedTodos;
