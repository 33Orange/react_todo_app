import Counter from './TodoCounter';
import SortButtons from './TodoSortBtns';
import ClearCompleted from './TodoClearCompl';
import React from 'react';

class Footer extends React.Component {
  render() {
    const isAnyCompleted = this.props.todos.some(item => item.isDone);
    const countActiveTodos = this.props.todos.filter(item => !item.isDone).length;
    return (
      <div className="footer">
        <Counter count={countActiveTodos} />
        <SortButtons
          activeFilter={this.props.activeFilter}
          changeFilter={this.props.changeFilter}
        />
        {isAnyCompleted ? (
          <ClearCompleted clearCompletedTodo={this.props.clearCompletedTodo} />
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default Footer;
