import * as React from 'react';
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

class TodosList extends React.Component<ITodoListProps> {
  componentDidMount() {
    this.getTodos();
  }

  getTodos = () => {
    fetch(url)
      .then(response => response.json())
      .then(response => {
        return this.props.setTodoAction(response);
      });
  };

  addTodo = (value: string) => {
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
          this.props.addTodoAction(newTodo);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  deleteTodo = (todoId: string) => {
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
        this.props.deleteTodoAction(deletedTodo);
      })
      .catch(err => {
        console.log(err);
      });
  };

  updateTodo = (todo: ITodo) => {
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
        this.props.updateTodoAction(updatedTodo);
      })
      .catch(err => {
        console.log(err);
      });
  };

  clearCompletedTodo = () => {
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
        this.props.setTodoAction(newTodoList);
      })
      .catch(err => {
        console.log(err);
      });
  };

  toggleStatusAllTodos = (status: boolean) => {
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
        this.props.setTodoAction(updatedList);
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleCompleteTodo = (todo: ITodo) => {
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

  handleEditTodo = (todoId: string, value: string) => {
    const todos = [...this.props.todos];
    const index = todos.findIndex(item => item._id == todoId);
    const editedTodo = todos[index];
    editedTodo.value = value;
    this.updateTodo(editedTodo);
  };

  render() {
    const filterMap: IFilterMap = {
      all: item => item,
      active: item => !item.isDone,
      completed: item => item.isDone,
    };
    const filteredTodoList = this.props.todos.filter(filterMap[this.props.filter]);
    return (
      <div className="todolist">
        <h1 className="todolist__title">todos</h1>
        <Header
          todos={this.props.todos}
          onAddTodo={this.addTodo}
          onCompleteAllTodos={this.handleCompleteAllTodos}
        />
        <div className="main">
          {filteredTodoList.map((todo: ITodo) => (
            <Todo
              key={todo._id}
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
const mapStateToProps = (state: ITodoListState) => ({
  todos: state.todos,
  filter: state.filter,
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
