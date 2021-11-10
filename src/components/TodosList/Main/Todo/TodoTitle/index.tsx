import * as React from 'react';
import { useState } from 'react';
import useStyles from './style';
import { ITodo } from '../../../../../types/todo';

interface Props {
  onEditTodo: (todo: ITodo) => void;
  onDeleteTodo: (todoId: string) => void;
  todo: ITodo;
}

const TodoTitle = ({ todo, onEditTodo, onDeleteTodo }: Props) => {
  const [todoValue, setTodoValue] = useState(todo.value);
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
    todoValue.length > 0 ? onEditTodo({ ...todo, value: todoValue }) : onDeleteTodo(todo._id);
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
};

export default React.memo(TodoTitle);
