import React from 'react';
import './style.scss';
//Header / Main Input and Complete all button
import Header from './Header';
//Todo UL
import Todo from './Todo';
//Footer / Status Bar
import Footer from './Footer';
import { createUrl } from '../../utils/createQueryString';

class TodosList extends React.Component {
  constructor(props) {
    super(props);
    this.url = 'http://localhost:5000/todos';
    this.state = {
      todos: [],
      filter: 'All',
    };
  }
  componentDidMount() {
    this.getTodosFromData();
  }

  getTodosFromData = () => {
    fetch(this.url)
      .then(response => response.json())
      .then(response => this.setState({ todos: response }));
  };

  addTodoToData = value => {
    const todoToSend = JSON.stringify({ value, isDone: false });
    fetch(this.url, {
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
        this.setState(prevState => ({
          todos: [...prevState.todos, newTodo],
        }));
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteTodoFromData = todoId => {
    fetch(`${this.url}/${todoId}`, {
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
        this.setState(prevState => ({
          todos: [...prevState.todos].filter(item => item._id != deletedTodo._id),
        }));
      })
      .catch(err => {
        console.log(err);
      });
  };

  updateTodoAtData = todo => {
    const todoToSend = JSON.stringify(todo);
    fetch(this.url, {
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
        this.setState(prevState => ({
          todos: [...prevState.todos].map(item => {
            if (item._id == updatedTodo._id) {
              item = updatedTodo;
            }
            return item;
          }),
        }));
      })
      .catch(err => {
        console.log(err);
      });
  };

  clearCompletedTodoAtData = () => {
    fetch(createUrl(this.url, { cleardone: true }), {
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
        this.setState({ todos: newTodoList });
      })
      .catch(err => {
        console.log(err);
      });
  };

  toggleStatusAllTodosAtData = (before, after) => {
    const todoToSend = JSON.stringify({ before, after });
    fetch(`${this.url}/completeall`, {
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
        this.setState({ todos: updatedList });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleAddTodo = value => {
    if (value) {
      this.addTodoToData(value);
    }
  };

  handleDeleteTodo = todoId => {
    this.deleteTodoFromData(todoId);
  };

  handleClearCompletedTodo = () => {
    this.clearCompletedTodoAtData();
  };

  handleCompleteTodo = todo => {
    todo.isDone = !todo.isDone;
    this.updateTodoAtData(todo);
  };

  handleCompleteAllTodos = () => {
    const todos = [...this.state.todos];
    todos.some(item => !item.isDone)
      ? this.toggleStatusAllTodosAtData(false, true)
      : this.toggleStatusAllTodosAtData(true, false);
  };

  handleEditTodo = (todoId, value) => {
    const todos = [...this.state.todos];
    const index = todos.findIndex(item => item._id == todoId);
    const editedTodo = todos[index];
    editedTodo.value = value;
    this.updateTodoAtData(editedTodo);
  };

  handleChangeFilter = value => {
    this.setState({ filter: value });
  };

  render() {
    const filterMap = {
      All: this.state.todos,
      Active: this.state.todos.filter(item => !item.isDone),
      Completed: this.state.todos.filter(item => item.isDone),
    };
    const filteredTodos = filterMap[this.state.filter];
    return (
      <div className="todolist">
        <h1 className="todolist__title">todos</h1>
        <Header
          todos={this.state.todos}
          onAddTodo={this.handleAddTodo}
          onCompleteAllTodos={this.handleCompleteAllTodos}
        />
        <div className="main">
          {filteredTodos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              onDeleteTodo={this.handleDeleteTodo}
              onCompletetodo={this.handleCompleteTodo}
              onEditTodo={this.handleEditTodo}
            />
          ))}
        </div>
        <Footer
          todos={this.state.todos}
          activeFilter={this.state.filter}
          onChangeFilter={this.handleChangeFilter}
          onClearCompletedTodo={this.handleClearCompletedTodo}
        />
      </div>
    );
  }
}

export default TodosList;
