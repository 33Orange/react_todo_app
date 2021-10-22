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
import {
  setTodoAction,
  addTodoAction,
  deleteTodoAction,
  updateTodoAction,
  changeFilter,
} from '../../redux/actionCreators';

class TodosList extends React.Component {
  constructor(props) {
    super(props);
    this.url = 'http://localhost:5000/todos';
  }

  componentDidMount() {
    this.getTodos();
  }

  getTodos = () => {
    fetch(this.url)
      .then(response => response.json())
      .then(response => {
        return this.props.setTodoAction(response);
      });
  };

  addTodo = value => {
    if (!value) return null;
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
        this.props.addTodoAction(newTodo);
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteTodo = todoId => {
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
        this.props.deleteTodoAction(deletedTodo);
      })
      .catch(err => {
        console.log(err);
      });
  };

  updateTodo = todo => {
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
        this.props.updateTodoAction(updatedTodo);
      })
      .catch(err => {
        console.log(err);
      });
  };

  clearCompletedTodo = () => {
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
        this.props.setTodoAction(newTodoList);
      })
      .catch(err => {
        console.log(err);
      });
  };

  toggleStatusAllTodos = status => {
    const todoToSend = JSON.stringify({ status });
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
        this.props.setTodoAction(updatedList);
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleCompleteTodo = todo => {
    const newTodo = todo;
    newTodo.isDone = !todo.isDone;
    this.updateTodo(newTodo);
  };

  handleCompleteAllTodos = () => {
    const todos = [...this.props.todos];
    todos.some(item => !item.isDone)
      ? this.toggleStatusAllTodos(true)
      : this.toggleStatusAllTodos(false);
  };

  handleEditTodo = (todoId, value) => {
    const todos = [...this.props.todos];
    const index = todos.findIndex(item => item._id == todoId);
    const editedTodo = todos[index];
    editedTodo.value = value;
    this.updateTodo(editedTodo);
  };

  render() {
    const filterMap = {
      All: this.props.todos,
      Active: this.props.todos.filter(item => !item.isDone),
      Completed: this.props.todos.filter(item => item.isDone),
    };
    const filteredTodos = filterMap[this.props.filter];
    return (
      <div className="todolist">
        <h1 className="todolist__title">todos</h1>
        <Header
          todos={this.props.todos}
          onAddTodo={this.addTodo}
          onCompleteAllTodos={this.handleCompleteAllTodos}
        />
        <div className="main">
          {filteredTodos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              onDeleteTodo={this.deleteTodo}
              onCompletetodo={this.handleCompleteTodo}
              onEditTodo={this.handleEditTodo}
            />
          ))}
        </div>
        <Footer
          todos={this.props.todos}
          activeFilter={this.props.filter}
          onChangeFilter={this.props.changeFilter}
          onClearCompletedTodo={this.clearCompletedTodo}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  setTodoAction,
  addTodoAction,
  deleteTodoAction,
  updateTodoAction,
  changeFilter,
};
const mapStateToProps = state => ({
  todos: state.todos,
  filter: state.filter,
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
