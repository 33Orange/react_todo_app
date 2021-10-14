import React from 'react';
import '../../styles/Footer/TodoCounter.scss';

class Counter extends React.Component {
  render() {
    return (
      <div className="counter-cont">
        <span className="counter">{this.props.count} items left</span>
      </div>
    );
  }
}

export default Counter;
