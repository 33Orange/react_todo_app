import * as React from 'react';
import { useEffect } from 'react';
import './style.scss';
//Header / Main Input and Complete all button
import Header from './Header';
//Todo UL
import Todo from './Todo';
//Footer / Status Bar
import Footer from './Footer';
import { createUrl } from '../../utils/createQueryString';
import { url } from '../../consts/serverUrl';
//Redux
import { connect } from 'react-redux';
import {
  setTodoAction,
  addTodoAction,
  deleteTodoAction,
  updateTodoAction,
  changeFilter,
} from '../../redux/actionCreators';
import { ITodo, ITodoListState, IFilterMap } from '../../types/todo';

interface ITodoListProps {
  todos: Array<ITodo>;
  filter: string;
  setTodoAction: (todoList: Array<ITodo>) => void;
  addTodoAction: (todo: ITodo) => void;
  deleteTodoAction: (todo: ITodo) => void;
  updateTodoAction: (todo: ITodo) => void;
  changeFilter: (filter: string) => void;
}

const TodosList: React.FC<ITodoListProps> = ({
  todos,
  filter,
  setTodoAction,
  addTodoAction,
  deleteTodoAction,
  updateTodoAction,
  changeFilter,
}) => {
  useEffect(() => {
    getTodos();
  });

  const getTodos = () => {
    fetch(url)
      .then(response => response.json())
      .then(response => {
        return setTodoAction(response);
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
          addTodoAction(newTodo);
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
        deleteTodoAction(deletedTodo);
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
        updateTodoAction(updatedTodo);
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
        setTodoAction(newTodoList);
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
        setTodoAction(updatedList);
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
        onChangeFilter={changeFilter}
        onClearCompletedTodo={clearCompletedTodo}
      />
    </div>
  );
};

const mapDispatchToProps = {
  setTodoAction,
  addTodoAction,
  deleteTodoAction,
  updateTodoAction,
  changeFilter,
};
const mapStateToProps = (state: ITodoListState) => ({
  todos: state.todos,
  filter: state.filter,
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
