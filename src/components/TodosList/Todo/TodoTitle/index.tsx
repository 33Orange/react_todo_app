import * as React from 'react';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { ITodo } from '../../../../types/todo';

const useStyles = makeStyles({
  todoTitle: {
    width: `87%`,
    height: `100%`,
    position: `relative`,
  },
  todoTitle__text: {
    position: `absolute`,
    left: 0,
    top: 10,
    fontSize: 25,
    width: `100%`,
    opacity: 0.8,
    '&.active': {
      opacity: 0.5,
      textDecoration: `line-through`,
    },
  },
  todoTitle__editInput: {
    fontSize: 25,
    fontWeight: 400,
    position: `absolute`,
    left: 0,
    top: 0,
    width: `100%`,
    height: `100%`,
    border: `none`,
    background: `#fff`,
    zIndex: 100,
    '&:focus': {
      outline: `1px solid rgba(0, 0, 0, 0.4);
      box-shadow: inset 1px 1px 10px rgba(0, 0, 0, 0.2)`,
    },
  },
});
interface TodoTitleProps {
  onEditTodo: (todoId: string, value: string) => void;
  onDeleteTodo: (todoId: string) => void;
  todo: ITodo;
}

const TodoTitle: React.FC<TodoTitleProps> = ({ todo, onEditTodo, onDeleteTodo }) => {
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
    <div className={classes.todoTitle}>
      {isEdit ? (
        <input
          className={classes.todoTitle__editInput}
          type="text"
          value={todoValue}
          onChange={handleChange}
          onKeyPress={handlePressEnter}
          onBlur={editTodo}
          ref={input => input && input.focus()}
        />
      ) : (
        <p
          className={todo.isDone ? classes.todoTitle__text + ' active' : classes.todoTitle__text}
          onDoubleClick={openEditor}
        >
          {todo.value}
        </p>
      )}
    </div>
  );
};

export default TodoTitle;
