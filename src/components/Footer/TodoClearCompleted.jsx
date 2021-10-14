import React from 'react';
import '../../styles/Footer/TodoClearCompleted.scss';

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
