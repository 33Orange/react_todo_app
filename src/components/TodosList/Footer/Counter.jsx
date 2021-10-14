import React from 'react';
import styled from 'styled-components';

const CounterContainer = styled.div`
  width: 25%;
  margin-left: 1%;
  display: flex;
  align-items: center;
`;

class Counter extends React.Component {
  render() {
    return (
      <CounterContainer>
        <span>{this.props.count} items left</span>
      </CounterContainer>
    );
  }
}

export default Counter;
