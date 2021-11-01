import * as React from 'react';
import { useState } from 'react';
import useStyles from './style';

import { ITodo } from '../../../types/todo';

interface Props {
  onAddTodo: (value: string) => void;
  onCompleteAllTodos: () => void;
  todos: Array<ITodo>;
}

const Header = ({ onAddTodo, todos, onCompleteAllTodos }: Props) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleAddTodo = () => {
    onAddTodo(inputValue);
    setInputValue('');
  };

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code == 'Enter') {
      handleAddTodo();
    }
  };
  const isAllDone = todos.some(item => !item.isDone);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.inputContainer}>
        <input
          type="checkbox"
          className={classes.completeAllBtn}
          id="completeAllBtn"
          checked={!isAllDone}
          onChange={onCompleteAllTodos}
        />
        <label htmlFor="completeAllBtn" className={classes.label}>
          ❯
        </label>
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
};

export default Header;
