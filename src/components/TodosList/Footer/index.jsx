import Counter from './Counter';
import Filters from './Filters';
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
        <Filters
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
