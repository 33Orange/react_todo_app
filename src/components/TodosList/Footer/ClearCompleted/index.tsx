import * as React from 'react';
import './style.scss';

interface ClearCompletedProps {
  onClearCompletedTodo: (e: React.MouseEvent) => void;
}

class ClearCompleted extends React.Component<ClearCompletedProps> {
  render() {
    return (
      <div className="clearCompleted">
        <span className="clearCompleted__button" onClick={this.props.onClearCompletedTodo}>
          Clear completed
        </span>
      </div>
    );
  }
}

export default ClearCompleted;
