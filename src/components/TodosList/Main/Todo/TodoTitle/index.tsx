import * as React from 'react';
import { useState } from 'react';
import useStyles from './style';
import { ITodo } from '../../../../../types/todo';

interface Props {
  onEditTodo: (todoId: string, value: string) => void;
  onDeleteTodo: (todoId: string) => void;
  todo: ITodo;
}

export default React.memo(function TodoTitle({ todo, onEditTodo, onDeleteTodo }: Props) {
  const [todoValue, setTodoValue] = useState(`${todo.value}`);
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value);
  };

  const openEditor = () => {
    setIsEdit(true);
  };

  const editTodo = () => {
    if (!isEdit) {
      return;
    }
    const todoId = todo._id;
    const value = todoValue;
    todoValue.length > 0 ? onEditTodo(todoId, value) : onDeleteTodo(todoId);
    setIsEdit(false);
  };

  const handlePressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code == 'Enter') {
      editTodo();
    }
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {isEdit ? (
        <input
          className={classes.editInput}
          type="text"
          value={todoValue}
          onChange={handleChange}
          onKeyPress={handlePressEnter}
          onBlur={editTodo}
          ref={input => input && input.focus()}
        />
      ) : (
        <p
          className={todo.isDone ? classes.text + ' active' : classes.text}
          onDoubleClick={openEditor}
        >
          {todo.value}
        </p>
      )}
    </div>
  );
});
