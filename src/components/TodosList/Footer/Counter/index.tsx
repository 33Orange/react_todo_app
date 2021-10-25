import * as React from 'react';
import './style.scss';

interface CounterProps {
  count: number;
}

const Counter: React.FC<CounterProps> = ({ count }) => {
  return (
    <div className="counter">
      <span>{count} items left</span>
    </div>
  );
};

export default Counter;
