import * as React from 'react';
import { useMemo } from 'react';
import useStyles from './style';

import Todo from './Todo';

import { filterMap } from '../../../constants/todos';
import { ITodo } from '../../../types/todo';
import { Droppable } from 'react-beautiful-dnd';

interface Props {
  onCompleteTodo: (todo: ITodo) => void;
  onEditTodo: (todo: ITodo) => void;
  onDeleteTodo: (todoId: string) => void;
  todos: ITodo[];
  filter: string;
}

const Main = ({ onCompleteTodo, onEditTodo, onDeleteTodo, todos, filter }: Props) => {
  const filteredTodoList = useMemo(
    () => todos.filter(filterMap[filter]).sort((a, b) => a.sortIndex - b.sortIndex),
    [todos, filter],
  );
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
};

export default React.memo(Main);
