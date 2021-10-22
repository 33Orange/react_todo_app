import * as React from 'react';
import './style.scss';

interface CounterProps {
  count: number;
}

class Counter extends React.Component<CounterProps> {
  render() {
    return (
      <div className="counter">
        <span>{this.props.count} items left</span>
      </div>
    );
  }
}

export default Counter;
