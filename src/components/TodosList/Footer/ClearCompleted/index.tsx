import * as React from 'react';
import './style.scss';

interface ClearCompletedProps {
  onClearCompletedTodo: (e: React.MouseEvent) => void;
}

const ClearCompleted: React.FC<ClearCompletedProps> = ({ onClearCompletedTodo }) => {
  return (
    <div className="clearCompleted">
      <span className="clearCompleted__button" onClick={onClearCompletedTodo}>
        Clear completed
      </span>
    </div>
  );
};

export default ClearCompleted;
