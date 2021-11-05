import * as React from 'react';
import { useEffect } from 'react';
import useStyles from './style';

import Header from './Header';
import Todo from './Todo';
import Footer from './Footer';

import { filterMap } from '../../constans/todos';
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

  const filteredTodoList = todos.filter(filterMap[filter]);
  const classes = useStyles();

  return (
    <React.Fragment>
      <Header todos={todos} onAddTodo={addTodo} onCompleteAllTodos={handleCompleteAllTodos} />
      <div className={classes.main}>
        {filteredTodoList.map((todo: ITodo) => (
          <Todo
            key={todo._id}
            todo={todo}
            onDeleteTodo={deleteTodo}
            onCompletetodo={handleCompleteTodo}
            onEditTodo={handleEditTodo}
          />
        ))}
      </div>
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
