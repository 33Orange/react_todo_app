import * as React from 'react';
import TodoTitle from './TodoTitle';
import useStyles from './style';
import { ITodo } from '../../../../types/todo';
import { Draggable } from 'react-beautiful-dnd';

interface Props {
  todo: ITodo;
  onCompletetodo: (todo: ITodo) => void;
  onDeleteTodo: (todoId: string) => void;
  onEditTodo: (todo: ITodo) => void;
  index: any;
}

const Todo = ({ todo, onCompletetodo, onDeleteTodo, onEditTodo, index }: Props) => {
  const handleCompleteTodo = () => {
    onCompletetodo({ ...todo, isDone: !todo.isDone });
  };

  const handleDeleteTodo = () => {
    onDeleteTodo(todo._id);
  };

  const classes = useStyles();
  return (
    <Draggable draggableId={todo._id} index={index}>
      {provided => (
        <div className={classes.root} {...provided.draggableProps} ref={provided.innerRef}>
          <div {...provided.dragHandleProps} className={classes.draggableIcon}></div>
          <input
            className={classes.completeBtn}
            type="checkbox"
            checked={todo.isDone}
            onChange={handleCompleteTodo}
            tabIndex={-1}
          />
          <TodoTitle todo={todo} onDeleteTodo={onDeleteTodo} onEditTodo={onEditTodo} />
          <button className={classes.deleteBtn} onClick={handleDeleteTodo} tabIndex={-1}></button>
        </div>
      )}
    </Draggable>
  );
};

export default React.memo(Todo);
