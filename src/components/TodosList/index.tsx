import * as React from 'react';
import { useEffect, useMemo, useCallback, useState } from 'react';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Loader from '../Loader';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import {
  addTodoRequest,
  changeFilter,
  clearCompletedRequest,
  deleteTodoRequest,
  setTodosRequest,
  toggleStatusTodosRequest,
  updateTodoRequest,
  updateTodoAfterDrag,
} from '../../redux/actionCreators';

import { ITodo } from '../../types/todo';

import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { todosSelector, filterSelector, todosIsLoadingSelector } from '../../redux/selectors';

const TodosList = () => {
  const todos = useTypedSelector(todosSelector);
  const isLoading = useTypedSelector(todosIsLoadingSelector);
  const filter = useTypedSelector(filterSelector);

  const [localTodos, setLocalTodos] = useState(todos);

  const dispatch = useDispatch();

  const handleAddTodo = useCallback((value: string) => {
    dispatch(addTodoRequest(value));
  }, []);

  const handleDeleteTodo = useCallback((todoId: string) => {
    dispatch(deleteTodoRequest(todoId));
  }, []);

  const handleClearCompletedTodo = useCallback(() => {
    dispatch(clearCompletedRequest());
  }, []);

  const handleCompleteTodo = useCallback((todo: ITodo) => {
    dispatch(updateTodoRequest(todo));
  }, []);

  const handleCompleteAllTodos = useCallback(() => {
    todos.some(item => !item.isDone)
      ? dispatch(toggleStatusTodosRequest(true))
      : dispatch(toggleStatusTodosRequest(false));
  }, [todos]);

  const handleEditTodo = useCallback(
    (todo: ITodo) => {
      dispatch(updateTodoRequest(todo));
    },
    [todos],
  );

  const handleChangeFilter = useCallback((value: string) => {
    dispatch(changeFilter(value));
  }, []);

  const sortTodos = useMemo(
    () => [...localTodos].sort((a, b) => a.sortIndex - b.sortIndex),
    [localTodos],
  );
  const onDragEnd = useCallback(
    ({ destination, source }: DropResult) => {
      if (!destination) {
        return;
      }
      const destinationSortIndex = sortTodos[destination.index].sortIndex;

      const nextToDestination =
        destination.index > source.index
          ? sortTodos[destination.index + 1]?.sortIndex
          : sortTodos[destination.index - 1]?.sortIndex;

      const result =
        destination.index > source.index
          ? nextToDestination
            ? (destinationSortIndex + nextToDestination) / 2
            : destinationSortIndex + 1
          : nextToDestination
          ? (destinationSortIndex + nextToDestination) / 2
          : destinationSortIndex - 1;

      const prevTodo = { ...sortTodos[source.index] };
      const newTodo = { ...sortTodos[source.index] };
      newTodo.sortIndex = result;

      dispatch(updateTodoAfterDrag({ newTodo, prevTodo }));
      setLocalTodos(todos.map(item => (item._id === newTodo._id ? newTodo : item)));
    },
    [sortTodos],
  );

  useEffect(() => {
    dispatch(setTodosRequest());
  }, []);

  useEffect(() => {
    setLocalTodos(todos);
  }, [todos]);

  return (
    <React.Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <Header
            todos={localTodos}
            onAddTodo={handleAddTodo}
            onCompleteAllTodos={handleCompleteAllTodos}
          />
          <DragDropContext onDragEnd={onDragEnd}>
            <Main
              todos={localTodos}
              filter={filter}
              onDeleteTodo={handleDeleteTodo}
              onEditTodo={handleEditTodo}
              onCompleteTodo={handleCompleteTodo}
            />
          </DragDropContext>
          <Footer
            todos={localTodos}
            activeFilter={filter}
            onChangeFilter={handleChangeFilter}
            onClearCompletedTodo={handleClearCompletedTodo}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default React.memo(TodosList);
