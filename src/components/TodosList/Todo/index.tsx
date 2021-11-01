import * as React from 'react';
import TodoTitle from './TodoTitle';
import useStyles from './style';
import { ITodo } from '../../../types/todo';

interface Props {
  todo: ITodo;
  onCompletetodo: (todo: ITodo) => void;
  onDeleteTodo: (todoId: string) => void;
  onEditTodo: (todoId: string, value: string) => void;
}

const Todo = ({ todo, onCompletetodo, onDeleteTodo, onEditTodo }: Props) => {
  const handleCompleteTodo = () => {
    onCompletetodo(todo);
  };
  const handleDeleteTodo = () => {
    onDeleteTodo(todo._id);
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <input
        className={classes.completeBtn}
        type="checkbox"
        checked={todo.isDone}
        onChange={handleCompleteTodo}
      />
      <TodoTitle todo={todo} onDeleteTodo={onDeleteTodo} onEditTodo={onEditTodo} />
      <button className={classes.deleteBtn} onClick={handleDeleteTodo}></button>
    </div>
  );
};

export default Todo;
