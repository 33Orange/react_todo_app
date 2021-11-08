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
import { filterMap } from '../../constans/todos';

import { DragDropContext, DropResult } from 'react-beautiful-dnd';

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
  const handlechangeFilter = (value: string) => {
    dispatch(changeFilter(value));
  };

  const onDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) return;
    const newTodos = todos.sort((a, b) => a.sortIndex - b.sortIndex);
    const destinationSortIndex = newTodos[destination.index].sortIndex;
    let result;
    if (destination.index > source.index) {
      const nextToDestinationSortIndex = newTodos[destination.index + 1]?.sortIndex;
      result = nextToDestinationSortIndex
        ? (destinationSortIndex + nextToDestinationSortIndex) / 2
        : destinationSortIndex + 1;
    } else {
      const prevToDestinationSortIndex = newTodos[destination.index - 1]?.sortIndex;
      result = prevToDestinationSortIndex
        ? (destinationSortIndex + prevToDestinationSortIndex) / 2
        : destinationSortIndex - 1;
    }
    const editedTodo = newTodos[source.index];
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
        onChangeFilter={handlechangeFilter}
        onClearCompletedTodo={clearCompletedTodo}
      />
    </React.Fragment>
  );
};

export default TodosList;
