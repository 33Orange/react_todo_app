import Counter from './Counter';
import Filters from './Filters';
import ClearCompletedTodos from './ClearCompleted';
import * as React from 'react';
import './style.scss';

interface Itodo {
  _id: string;
  value: string;
  isDone: boolean;
}

interface FooterProps {
  todos: Array<Itodo>;
  activeFilter: string;
  onChangeFilter: () => void;
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
