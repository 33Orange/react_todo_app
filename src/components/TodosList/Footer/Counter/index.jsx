import React from 'react';
import styled from 'styled-components';
import './style.scss';

class Counter extends React.Component {
  render() {
    return (
      <div className="counter">
        <span>{this.props.count} items left</span>
      </div>
    );
  }
}

export default Counter;
