import Counter from './Counter';
import Filters from './Filters';
import ClearCompletedTodos from './ClearCompleted';
import * as React from 'react';
import './style.scss';
import { ITodo } from '../../../types/todo';

interface FooterProps {
  todos: Array<ITodo>;
  activeFilter: string;
  onChangeFilter: (filter: string) => void;
  onClearCompletedTodo: () => void;
}

function Footer(props: FooterProps) {
  const isAnyCompleted = props.todos.some(item => item.isDone);
  const countActiveTodos = props.todos.filter(item => !item.isDone).length;
  return (
    <div className="footer">
      <Counter count={countActiveTodos} />
      <Filters activeFilter={props.activeFilter} onChangeFilter={props.onChangeFilter} />
      {isAnyCompleted ? (
        <ClearCompletedTodos onClearCompletedTodo={props.onClearCompletedTodo} />
      ) : null}
    </div>
  );
}

export default Footer;
