import * as React from 'react';
import { useState, useMemo } from 'react';
import useStyles from './style';

import { ITodo } from '../../../types/todo';
import CompleteAllButton from './CompleteAllButton';
import { I18nContext } from '../../../i18n';

interface Props {
  onAddTodo: (value: string) => void;
  onCompleteAllTodos: () => void;
  todos: Array<ITodo>;
}

const Header = ({ onAddTodo, todos, onCompleteAllTodos }: Props) => {
  const [inputValue, setInputValue] = useState('');
  const { translate } = React.useContext(I18nContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue) {
      onAddTodo(inputValue);
      setInputValue('');
    }
  };

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
          placeholder={translate('todo_placeholder')}
        />
      </div>
    </div>
  );
};

export default React.memo(Header);
