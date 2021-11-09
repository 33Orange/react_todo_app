import * as React from 'react';
import { useState, useCallback, useMemo } from 'react';
import useStyles from './style';

import { ITodo } from '../../../types/todo';
import CompleteAllButton from './CompleteAllButton';

interface Props {
  onAddTodo: (value: string) => void;
  onCompleteAllTodos: () => void;
  todos: Array<ITodo>;
}

export default React.memo(function Header({ onAddTodo, todos, onCompleteAllTodos }: Props) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, []);

  const handleAddTodo = useCallback(() => {
    if (inputValue) {
      onAddTodo(inputValue);
      setInputValue('');
    }
  }, [inputValue]);

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code == 'Enter') {
      handleAddTodo();
    }
  };
  const isAllDone = useMemo(() => todos.some(item => !item.isDone), [todos]);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.inputContainer}>
        <CompleteAllButton onCompleteAllTodos={onCompleteAllTodos} isAllDone={isAllDone} />
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyPress={handleEnterPress}
          className={classes.input}
          placeholder="What needs to be done?"
        />
      </div>
    </div>
  );
});
