import * as React from 'react';
import { useEffect, useMemo, useCallback, useState } from 'react';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Loader from '../Loader';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import {
  addTodoActions,
  changeFilter,
  clearCompletedTodoActions,
  deleteTodoActions,
  fetchTodoActions,
  toggleCompletedTodoActions,
  updateTodoActions,
  updateTodoOnDragActions,
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
    dispatch(addTodoActions.request(value));
  }, []);

  const handleDeleteTodo = useCallback((todoId: string) => {
    dispatch(deleteTodoActions.request(todoId));
  }, []);

  const handleClearCompletedTodo = useCallback(() => {
    dispatch(clearCompletedTodoActions.request());
  }, []);

  const handleCompleteTodo = useCallback((todo: ITodo) => {
    dispatch(updateTodoActions.request(todo));
  }, []);

  const handleCompleteAllTodos = useCallback(() => {
    todos.some(item => !item.isDone)
      ? dispatch(toggleCompletedTodoActions.request(true))
      : dispatch(toggleCompletedTodoActions.request(false));
  }, [todos]);

  const handleEditTodo = useCallback(
    (todo: ITodo) => {
      dispatch(updateTodoActions.request(todo));
    },
    [todos],
  );

  const handleChangeFilter = useCallback((value: string) => {
    dispatch(changeFilter(value));
  }, []);

  const sortTodos = useMemo(() => [...localTodos].sort((a, b) => a.sortIndex - b.sortIndex), [localTodos]);
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
          ? (destinationSortIndex + nextToDestination) / 2 || destinationSortIndex + 1
          : (destinationSortIndex + nextToDestination) / 2 || destinationSortIndex - 1;

      const prevTodo = { ...sortTodos[source.index] };
      const newTodo = { ...sortTodos[source.index] };
      newTodo.sortIndex = result;

      dispatch(updateTodoOnDragActions.request({ newTodo, prevTodo }));
      setLocalTodos(sortTodos.map(item => (item._id === newTodo._id ? newTodo : item)));
    },
    [sortTodos],
  );

  useEffect(() => {
    dispatch(fetchTodoActions.request());
  }, []);

  useEffect(() => {
    setLocalTodos(todos);
  }, [todos]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header todos={localTodos} onAddTodo={handleAddTodo} onCompleteAllTodos={handleCompleteAllTodos} />
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
        </>
      )}
    </>
  );
};

export default React.memo(TodosList);
