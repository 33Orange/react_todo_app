import Counter from './Counter';
import Filters from './Filters';
import ClearCompletedTodos from './ClearCompleted';
import * as React from 'react';
import './style.scss';
import { ITodo } from '../../../types/index';

interface FooterProps {
  todos: Array<ITodo>;
  activeFilter: string;
  onChangeFilter: (arg0: string) => void;
  onClearCompletedTodo: () => void;
}

class Footer extends React.Component<FooterProps> {
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
