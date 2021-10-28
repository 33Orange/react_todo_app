import * as React from 'react';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';

import { ITodo } from '../../../types/todo';

const useStyles = makeStyles({
  header: {
    width: `100%`,
    borderBottom: `1px solid rgba(0, 0, 0, 0.4)`,
    height: 50,
    background: `#fff`,
    boxShadow: `1px 3px 5px rgba(0, 0, 0, 0.4)`,
  },
  header__inputContainer: {
    width: `100%`,
    height: `100%`,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `flex-end`,
    position: `relative`,
  },
  header__input: {
    width: `95%`,
    height: 40,
    border: `none`,
    outline: `none`,
    background: `none`,
    fontSize: 25,
    '&::-webkit-input-placeholder': {
      fontWeight: `500`,
      color: `rgba(0, 0, 0, 0.2)`,
      fontStyle: `italic`,
    },
  },
  header__completeAllBtn: {
    left: 0,
    width: `10%`,
    border: `none`,
    position: `absolute`,
    opacity: 0,
    zIndex: -1,
    '&:checked + label': {
      opacity: 0.65,
    },
  },
  completeAllBtn__label: {
    fontSize: 25,
    width: `6%`,
    marginLeft: `3%`,
    marginRight: `5%`,
    display: `inline-flex`,
    alignItems: `center`,
    userSelect: `none`,
    transform: `rotate(90deg)`,
    opacity: 0.2,
    transition: '0.3s',
    '&:hover': {
      opacity: 0.4,
    },
  },
});

interface HeaderProps {
  onAddTodo: (value: string) => void;
  onCompleteAllTodos: () => void;
  todos: Array<ITodo>;
}

const Header: React.FC<HeaderProps> = ({ onAddTodo, todos, onCompleteAllTodos }) => {
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
    <div className={classes.header}>
      <div className={classes.header__inputContainer}>
        <input
          type="checkbox"
          className={classes.header__completeAllBtn}
          id="completeAllBtn"
          checked={!isAllDone}
          onChange={onCompleteAllTodos}
        />
        <label htmlFor="completeAllBtn" className={classes.completeAllBtn__label}>
          ❯
        </label>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyPress={handleEnterPress}
          className={classes.header__input}
          placeholder="What needs to be done?"
        />
      </div>
    </div>
  );
};

export default Header;
