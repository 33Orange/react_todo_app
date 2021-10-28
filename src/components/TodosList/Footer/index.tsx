import * as React from 'react';
import { makeStyles } from '@mui/styles';

import Counter from './Counter';
import Filters from './Filters';
import ClearCompletedTodos from './ClearCompleted';

import { ITodo } from '../../../types/todo';

const useStyles = makeStyles({
  footer: {
    width: `100%`,
    display: `flex`,
    padding: `10px 0`,
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.8)',
    background: '#fff',
    boxShadow: `0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2),
      0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2), 1px 3px 5px rgba(0, 0, 0, 0.4)`,
  },
});

interface FooterProps {
  todos: Array<ITodo>;
  activeFilter: string;
  onChangeFilter: (filter: string) => void;
  onClearCompletedTodo: () => void;
}

function Footer(props: FooterProps) {
  const isAnyCompleted = props.todos.some(item => item.isDone);
  const countActiveTodos = props.todos.filter(item => !item.isDone).length;
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Counter count={countActiveTodos} />
      <Filters activeFilter={props.activeFilter} onChangeFilter={props.onChangeFilter} />
      {isAnyCompleted ? (
        <ClearCompletedTodos onClearCompletedTodo={props.onClearCompletedTodo} />
      ) : null}
    </div>
  );
}

export default Footer;
