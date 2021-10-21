import React from 'react';
import './style.scss';
//Header / Main Input and Complete all button
import Header from './Header';
//Todo UL
import Todo from './Todo';
//Footer / Status Bar
import Footer from './Footer';
import { createUrl } from '../../utils/createQueryString';
import { connect } from 'react-redux';
import mapDispatchToProps from '../../redux/mapDispatchToProps';
import mapStateToProps from '../../redux/mapStateToProps';

class TodosList extends React.Component {
  constructor(props) {
    super(props);
    this.url = 'http://localhost:5000/todos';
  }

  componentDidMount() {
    this.getTodosFromData();
  }

  getTodosFromData = () => {
    fetch(this.url)
      .then(response => response.json())
      .then(response => {
        return this.props.onGetTodos(response);
      });
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
        this.props.onAddTodo(newTodo);
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
        this.props.onDeleteTodo(deletedTodo);
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
        this.props.onUpdateTodo(updatedTodo);
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
        this.props.onGetTodos(newTodoList);
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
        console.log(updatedList);
        this.props.onGetTodos(updatedList);
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
    const todos = [...this.props.state.todos];
    todos.some(item => !item.isDone)
      ? this.toggleStatusAllTodosAtData(false, true)
      : this.toggleStatusAllTodosAtData(true, false);
  };

  handleEditTodo = (todoId, value) => {
    const todos = [...this.props.state.todos];
    const index = todos.findIndex(item => item._id == todoId);
    const editedTodo = todos[index];
    editedTodo.value = value;
    this.updateTodoAtData(editedTodo);
  };

  handleChangeFilter = value => {
    this.props.onChangeFilter(value);
  };

  render() {
    const filterMap = {
      All: this.props.state.todos,
      Active: this.props.state.todos.filter(item => !item.isDone),
      Completed: this.props.state.todos.filter(item => item.isDone),
    };
    const filteredTodos = filterMap[this.props.state.filter];
    return (
      <div className="todolist">
        <h1 className="todolist__title">todos</h1>
        <Header
          todos={this.props.state.todos}
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
          todos={this.props.state.todos}
          activeFilter={this.props.state.filter}
          onChangeFilter={this.handleChangeFilter}
          onClearCompletedTodo={this.handleClearCompletedTodo}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
