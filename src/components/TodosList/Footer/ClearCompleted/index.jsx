import React from 'react';
import './style.scss';

class ClearCompleted extends React.Component {
  render() {
    return (
      <div className="clear-cont">
        <span className="clear-btn" onClick={this.props.onClearCompletedTodo}>
          Clear completed
        </span>
      </div>
    );
  }
}

export default ClearCompleted;
