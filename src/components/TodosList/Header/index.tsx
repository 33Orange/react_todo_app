import * as React from 'react';
import { useState } from 'react';
import './style.scss';
import { ITodo } from '../../../types/todo';

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

  return (
    <div className="header">
      <div className="header__input-container">
        <input
          type="checkbox"
          className="header__completeAll-btn"
          id="header__completeAll-btn"
          checked={!isAllDone}
          onChange={onCompleteAllTodos}
        />
        <label htmlFor="header__completeAll-btn" />
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyPress={handleEnterPress}
          className="header__input"
          placeholder="What needs to be done?"
        />
      </div>
    </div>
  );
};

export default Header;
