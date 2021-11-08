import * as React from 'react';
import TodoTitle from './TodoTitle';
import useStyles from './style';
import { ITodo } from '../../../../types/todo';
import { Draggable } from 'react-beautiful-dnd';

interface Props {
  todo: ITodo;
  onCompletetodo: (todo: ITodo) => void;
  onDeleteTodo: (todoId: string) => void;
  onEditTodo: (todoId: string, value: string) => void;
  index: any;
}

const Todo = ({ todo, onCompletetodo, onDeleteTodo, onEditTodo, index }: Props) => {
  const handleCompleteTodo = () => {
    onCompletetodo(todo);
  };
  const handleDeleteTodo = () => {
    onDeleteTodo(todo._id);
  };
  const classes = useStyles();
  return (
    <Draggable draggableId={todo._id} index={index}>
      {provided => (
        <div
          className={classes.root}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <input
            className={classes.completeBtn}
            type="checkbox"
            checked={todo.isDone}
            onChange={handleCompleteTodo}
          />
          <TodoTitle todo={todo} onDeleteTodo={onDeleteTodo} onEditTodo={onEditTodo} />
          <button className={classes.deleteBtn} onClick={handleDeleteTodo}></button>
        </div>
      )}
    </Draggable>
  );
};

export default Todo;
