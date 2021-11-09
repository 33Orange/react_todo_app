import * as React from 'react';
import { useMemo } from 'react';
import useStyles from './style';

import Counter from './Counter';
import Filters from './Filters';
import ClearCompletedTodos from './ClearCompleted';

import { ITodo } from '../../../types/todo';

interface Props {
  todos: Array<ITodo>;
  activeFilter: string;
  onChangeFilter: (filter: string) => void;
  onClearCompletedTodo: () => void;
}

export default React.memo(function Footer({
  todos,
  activeFilter,
  onChangeFilter,
  onClearCompletedTodo,
}: Props) {
  const isAnyCompleted = useMemo(() => todos.some(item => item.isDone), [todos]);
  const countActiveTodos = useMemo(() => todos.filter(item => !item.isDone).length, [todos]);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Counter count={countActiveTodos} />
      <Filters activeFilter={activeFilter} onChangeFilter={onChangeFilter} />
      {isAnyCompleted ? <ClearCompletedTodos onClearCompletedTodo={onClearCompletedTodo} /> : null}
    </div>
  );
});
