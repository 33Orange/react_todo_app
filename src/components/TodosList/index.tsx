import * as React from 'react';
import { useEffect } from 'react';

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
import { nextSortIndex, prevSortIndex } from '../../utils/dndSortIndex';

const TodosList = () => {
  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(setTodosRequest());
    }
  }, []);
  const { todos, filter } = useTypedSelector(state => state);

  const dispatch = useDispatch();

  const addTodo = (value: string) => {
    dispatch(addTodoRequest(value));
  };

  const deleteTodo = (todoId: string) => {
    dispatch(deleteTodoRequest(todoId));
  };

  const updateTodo = (todo: ITodo) => {
    dispatch(updateTodoRequest(todo));
  };

  const clearCompletedTodo = () => {
    dispatch(clearCompletedRequest());
  };

  const toggleStatusAllTodos = (status: boolean) => {
    dispatch(toggleStatusTodosRequest(status));
  };

  const handleCompleteTodo = (todo: ITodo) => {
    const newTodo = todo;
    newTodo.isDone = !todo.isDone;
    updateTodo(newTodo);
  };

  const handleCompleteAllTodos = () => {
    const newTodos = [...todos];
    newTodos.some(item => !item.isDone) ? toggleStatusAllTodos(true) : toggleStatusAllTodos(false);
  };

  const handleEditTodo = (todoId: string, value: string) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex(item => item._id == todoId);
    const editedTodo = newTodos[index];
    editedTodo.value = value;
    updateTodo(editedTodo);
  };
  const handleChangeFilter = (value: string) => {
    dispatch(changeFilter(value));
  };

  const sortTodos = todos.sort((a, b) => a.sortIndex - b.sortIndex);
  const onDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) return;

    const result =
      destination.index > source.index
        ? nextSortIndex(destination.index, sortTodos)
        : prevSortIndex(destination.index, sortTodos);

    const editedTodo = sortTodos[source.index];
    editedTodo.sortIndex = result;
    updateTodo(editedTodo);
  };

  return (
    <React.Fragment>
      <Header todos={todos} onAddTodo={addTodo} onCompleteAllTodos={handleCompleteAllTodos} />
      <DragDropContext onDragEnd={onDragEnd}>
        <Main
          onDeleteTodo={deleteTodo}
          onCompleteTodo={handleCompleteTodo}
          onEditTodo={handleEditTodo}
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
};

export default TodosList;
