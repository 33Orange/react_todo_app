import * as React from 'react';
import TodoTitle from './TodoTitle';
import { makeStyles } from '@mui/styles';
import { ITodo } from '../../../types/todo';
import checkImage from '../../../image/checked.png';
import closeImage from '../../../image/close.png';

const useStyles = makeStyles({
  todo: {
    width: `100%`,
    height: 50,
    display: `flex`,
    borderBottom: `1px solid rgba(0, 0, 0, 0.4)`,
    justifyContent: `space-between`,
    alignItems: `center`,
    position: `relative`,
    '&:hover button': {
      opacity: 0.5,
    },
  },
  todo__complete: {
    marginLeft: `3%`,
    width: 20,
    height: 20,
    backgroundColor: `white`,
    borderRadius: `50%`,
    verticalAlign: `middle`,
    border: `1px solid rgba(0, 0, 0, 0.3)`,
    appearance: `none`,
    '-webkit-appearance': `none`,
    outline: `none`,
    '&:checked': {
      border: `1px solid rgba(0, 128, 0, 0.4)`,
      content: '',
      backgroundImage: `url(${checkImage})`,
      backgroundPosition: `center`,
      backgroundSize: 20,
      backgroundRepeat: `no-repeat`,
      opacity: 0.8,
    },
  },
  todo__delete: {
    zIndex: 10,
    position: `absolute`,
    right: `5%`,
    width: 13,
    height: 13,
    background: `none`,
    backgroundImage: `url(${closeImage})`,
    backgroundPosition: `center`,
    backgroundSize: `cover`,
    backgroundRepeat: `no-repeat`,
    border: `none`,
    opacity: 0,
    cursor: `pointer`,
    transition: `opacity 0.3s`,
    '&:hover': {
      opacity: 0.9,
    },
  },
});
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
  const classes = useStyles();
  return (
    <div className={classes.todo}>
      <input
        className={classes.todo__complete}
        type="checkbox"
        checked={todo.isDone}
        onChange={handleCompleteTodo}
      />
      <TodoTitle todo={todo} onDeleteTodo={onDeleteTodo} onEditTodo={onEditTodo} />
      <button className={classes.todo__delete} onClick={handleDeleteTodo}></button>
    </div>
  );
};

export default Todo;
