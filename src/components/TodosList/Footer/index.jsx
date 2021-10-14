import Counter from './Counter';
import SortButtons from './SortButtons';
import ClearCompletedTodos from './ClearCompleted';
import React from 'react';
import './style.scss';

class Footer extends React.Component {
  render() {
    const isAnyCompleted = this.props.todos.some(item => item.isDone);
    const countActiveTodos = this.props.todos.filter(item => !item.isDone).length;
    return (
      <div className="footer">
        <Counter count={countActiveTodos} />
        <SortButtons
          activeFilter={this.props.activeFilter}
          onChangeFilter={this.props.onChangeFilter}
        />
        {isAnyCompleted ? (
          <ClearCompletedTodos onClearCompletedTodo={this.props.onClearCompletedTodo} />
        ) : null}
      </div>
    );
  }
}

export default Footer;
