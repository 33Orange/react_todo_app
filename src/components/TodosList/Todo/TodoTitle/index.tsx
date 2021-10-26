import * as React from 'react';
import { useState } from 'react';
import './style.scss';
import { ITodo } from '../../../../types/todo';

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

  return (
    <div className="todo-title">
      {isEdit ? (
        <input
          className="todo-title__editInput"
          type="text"
          value={todoValue}
          onChange={handleChange}
          onKeyPress={handlePressEnter}
          onBlur={editTodo}
          ref={input => input && input.focus()}
        />
      ) : (
        <p
          className={todo.isDone ? 'todo-title__text active' : 'todo-title__text'}
          onDoubleClick={openEditor}
        >
          {todo.value}
        </p>
      )}
    </div>
  );
};

export default TodoTitle;
