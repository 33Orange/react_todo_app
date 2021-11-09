import * as React from 'react';
import { useEffect, useMemo, useCallback } from 'react';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';

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
} from '../../redux/actionCreators';

import { ITodo } from '../../types/todo';

import { DragDropContext, DropResult } from 'react-beautiful-dnd';

export default function TodosList() {
  const { todos, filter } = useTypedSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(setTodosRequest());
    }
  }, []);

  const addTodo = useCallback((value: string) => {
    dispatch(addTodoRequest(value));
  }, []);

  const deleteTodo = useCallback((todoId: string) => {
    dispatch(deleteTodoRequest(todoId));
  }, []);

  const updateTodo = useCallback((todo: ITodo) => {
    dispatch(updateTodoRequest(todo));
  }, []);

  const clearCompletedTodo = useCallback(() => {
    dispatch(clearCompletedRequest());
  }, []);

  const toggleStatusAllTodos = useCallback((status: boolean) => {
    dispatch(toggleStatusTodosRequest(status));
  }, []);

  const handleCompleteTodo = useCallback((todo: ITodo) => {
    const newTodo = todo;
    newTodo.isDone = !todo.isDone;
    updateTodo(newTodo);
  }, []);

  const handleCompleteAllTodos = useCallback(() => {
    const newTodos = [...todos];
    newTodos.some(item => !item.isDone) ? toggleStatusAllTodos(true) : toggleStatusAllTodos(false);
  }, [todos]);

  const handleEditTodo = useCallback(
    (todoId: string, value: string) => {
      const newTodos = [...todos];
      const index = newTodos.findIndex(item => item._id == todoId);
      const editedTodo = newTodos[index];
      editedTodo.value = value;
      updateTodo(editedTodo);
    },
    [todos],
  );

  const handleChangeFilter = useCallback((value: string) => {
    dispatch(changeFilter(value));
  }, []);

  const sortTodos = useMemo(() => todos.sort((a, b) => a.sortIndex - b.sortIndex), [todos]);
  const onDragEnd = useCallback(
    ({ destination, source }: DropResult) => {
      if (!destination) return;
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

      const editedTodo = sortTodos[source.index];
      editedTodo.sortIndex = result;
      updateTodo(editedTodo);
    },
    [sortTodos],
  );

  return (
    <React.Fragment>
      <Header todos={todos} onAddTodo={addTodo} onCompleteAllTodos={handleCompleteAllTodos} />
      <DragDropContext onDragEnd={onDragEnd}>
        <Main
          onDeleteTodo={deleteTodo}
          onEditTodo={handleEditTodo}
          onCompleteTodo={handleCompleteTodo}
        />
      </DragDropContext>
      <Footer
        todos={todos}
        activeFilter={filter}
        onChangeFilter={handleChangeFilter}
        onClearCompletedTodo={clearCompletedTodo}
      />
    </React.Fragment>
  );
}
