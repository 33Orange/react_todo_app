import * as React from 'react';
import TodoTitle from './TodoTitle';
import './style.scss';
import { ITodo } from '../../../types/todo';

interface TodoProps {
  todo: ITodo;
  onCompletetodo: (todo: ITodo) => void;
  onDeleteTodo: (todoId: string) => void;
  onEditTodo: (todoId: string, value: string) => void;
}

const Todo: React.FC<TodoProps> = ({ todo, onCompletetodo, onDeleteTodo, onEditTodo }) => {
  const handleCompleteTodo = () => {
    onCompletetodo(todo);
  };
  const handleDeleteTodo = () => {
    onDeleteTodo(todo._id);
  };

  return (
    <div className="todo">
      <input
        className="todo__complete"
        type="checkbox"
        checked={todo.isDone}
        onChange={handleCompleteTodo}
      />
      <TodoTitle todo={todo} onDeleteTodo={onDeleteTodo} onEditTodo={onEditTodo} />
      <button className="todo__delete" onClick={handleDeleteTodo}></button>
    </div>
  );
};

export default Todo;
