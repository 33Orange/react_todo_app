import * as React from 'react';
import { useEffect } from 'react';
import './style.scss';
//Header / Main Input and Complete all button
import Header from './Header';
//Todo UL
import Todo from './Todo';
//Footer / Status Bar
import Footer from './Footer';
//Utils
import { filterMap } from '../../constans/todos';
import { useTypedSelector } from '../../hooks/useTypedSelector';
//Redux
import { useDispatch } from 'react-redux';
import {
  changeFilter,
  asyncSetTodoAction,
  asyncAddTodoAction,
  asyncDeleteTodoAction,
  asyncUpdateTodoAction,
  asyncClearCompleted,
  asyncToggleStatusAllTodos,
} from '../../redux/actionCreators';
import { ITodo } from '../../types/todo';

const TodosList = () => {
  useEffect(() => {
    dispatch(asyncSetTodoAction());
  }, []);

  const { todos, filter } = useTypedSelector(state => state);
  const dispatch = useDispatch();

  const addTodo = (value: string) => {
    dispatch(asyncAddTodoAction(value));
  };

  const deleteTodo = (todoId: string) => {
    dispatch(asyncDeleteTodoAction(todoId));
  };

  const updateTodo = (todo: ITodo) => {
    dispatch(asyncUpdateTodoAction(todo));
  };

  const clearCompletedTodo = () => {
    dispatch(asyncClearCompleted());
  };

  const toggleStatusAllTodos = (status: boolean) => {
    dispatch(asyncToggleStatusAllTodos(status));
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

  return (
    <div className="todolist">
      <h1 className="todolist__title">todos</h1>
      <Header todos={todos} onAddTodo={addTodo} onCompleteAllTodos={handleCompleteAllTodos} />
      <div className="main">
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
    </div>
  );
};

export default TodosList;
