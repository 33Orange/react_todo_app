import * as React from 'react';
import useStyles from './style';

import Todo from './Todo';

import { filterMap } from '../../../constans/todos';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

import { ITodo } from '../../../types/todo';

import { Droppable } from 'react-beautiful-dnd';

interface Props {
  onCompleteTodo: (todo: ITodo) => void;
  onEditTodo: (todoId: string, value: string) => void;
  onDeleteTodo: (todoId: string) => void;
}

export default function Main({ onCompleteTodo, onEditTodo, onDeleteTodo }: Props) {
  const { todos, filter } = useTypedSelector(state => state);

  const filteredTodoList = todos
    .filter(filterMap[filter])
    .sort((a, b) => a.sortIndex - b.sortIndex);
  const classes = useStyles();

  return (
    <Droppable droppableId={'droppable-list'}>
      {provided => (
        <div className={classes.root} {...provided.droppableProps} ref={provided.innerRef}>
          {filteredTodoList.map((todo: ITodo, index: number) => (
            <Todo
              key={todo._id}
              todo={todo}
              index={index}
              onDeleteTodo={onDeleteTodo}
              onCompletetodo={onCompleteTodo}
              onEditTodo={onEditTodo}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
