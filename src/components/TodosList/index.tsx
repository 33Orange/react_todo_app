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
import { createUrl } from '../../utils/createQueryString';
import { url } from '../../consts/serverUrl';
import { useTypedSelector } from '../../hooks/useTypedSelector';
//Redux
import { useDispatch } from 'react-redux';
import {
  setTodoAction,
  addTodoAction,
  deleteTodoAction,
  updateTodoAction,
  changeFilter,
} from '../../redux/actionCreators';
import { ITodo, IFilterMap } from '../../types/todo';

const TodosList = () => {
  const { todos, filter } = useTypedSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    fetch(url)
      .then(response => response.json())
      .then(response => {
        return dispatch(setTodoAction(response));
      });
  };

  const addTodo = (value: string) => {
    if (value) {
      const todoToSend = JSON.stringify({ value, isDone: false });
      fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: todoToSend,
      })
        .then(resp => {
          if (resp.ok) {
            return resp.json();
          } else {
            console.log('Status: ' + resp.status);
            return new Error();
          }
        })
        .then(newTodo => {
          dispatch(addTodoAction(newTodo));
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  const deleteTodo = (todoId: string) => {
    fetch(`${url}/${todoId}`, {
      method: 'delete',
    })
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        } else {
          console.log('Status: ' + resp.status);
          return new Error();
        }
      })
      .then(deletedTodo => {
        dispatch(deleteTodoAction(deletedTodo));
      })
      .catch(err => {
        console.log(err);
      });
  };

  const updateTodo = (todo: ITodo) => {
    const todoToSend = JSON.stringify(todo);
    fetch(url, {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: todoToSend,
    })
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        } else {
          console.log('Status: ' + resp.status);
          return new Error();
        }
      })
      .then(updatedTodo => {
        dispatch(updateTodoAction(updatedTodo));
      })
      .catch(err => {
        console.log(err);
      });
  };

  const clearCompletedTodo = () => {
    fetch(createUrl(url, { cleardone: true }), {
      method: 'delete',
    })
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        } else {
          console.log('Status: ' + resp.status);
          return new Error();
        }
      })
      .then(newTodoList => {
        dispatch(setTodoAction(newTodoList));
      })
      .catch(err => {
        console.log(err);
      });
  };

  const toggleStatusAllTodos = (status: boolean) => {
    const todoToSend = JSON.stringify({ status });
    fetch(`${url}/completeall`, {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: todoToSend,
    })
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        } else {
          console.log('Status: ' + resp.status);
          return new Error();
        }
      })
      .then(updatedList => {
        dispatch(setTodoAction(updatedList));
      })
      .catch(err => {
        console.log(err);
      });
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
  const filterMap: IFilterMap = {
    all: item => item,
    active: item => !item.isDone,
    completed: item => item.isDone,
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
