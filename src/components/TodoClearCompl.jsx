import React from 'react';

class ClearCompleted extends React.Component {
  render() {
    return (
      <div className="clear-cont">
        <span className="clear-btn" onClick={this.props.clearCompletedTodo}>
          Clear completed
        </span>
      </div>
    );
  }
}

export default ClearCompleted;
