import React from 'react';
import Todo from './Todo';
import MainInput from './TodoInput';
//Status bar
import Counter from './TodoCounter';
import SortButtons from './TodoSortBtns';
import ClearCompleted from './TodoClearCompl';

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.todosJson = localStorage.getItem('todos');
    this.todos = this.todosJson ? JSON.parse(this.todosJson) : [];
    this.state = {
      addTodoValue: '',
      todos: this.todos,
      isDoneAll: !JSON.parse(this.todosJson).some(item => !item.isDone),
      countActiveTodos: JSON.parse(this.todosJson).filter(item => !item.isDone).length,
      isCompletedAny: JSON.parse(this.todosJson).some(item => item.isDone),
    };
  }
  pushToLocalStorage = array => {
    localStorage.setItem('todos', JSON.stringify([...array]));
  };

  handleDelete = todo => {
    const todos = this.state.todos.filter(item => {
      return item.id !== todo;
    });
    this.pushToLocalStorage(todos);
    this.setState({ todos });
    this.statusCheck();
  };

  handleDone = todo => {
    const todos = [...this.state.todos];
    todos.map(item => {
      if (item.id == todo.id) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    this.pushToLocalStorage(todos);
    this.setState({ todos });
    this.statusCheck();
  };

  handleDoneAll = () => {
    const todos = [...this.state.todos];
    todos.some(item => !item.isDone)
      ? todos.map(item => (item.isDone = true))
      : todos.map(item => (item.isDone = false));
    this.pushToLocalStorage(todos);
    this.setState({ todos });
    this.statusCheck();
  };

  addTodo = value => {
    if (value) {
      const todos = [...this.state.todos];
      todos.push({
        id: Math.random().toString(36).substr(2, 9),
        value: value,
        isDone: false,
      });
      this.pushToLocalStorage(todos);
      this.setState({ addTodoValue: '', todos });
      this.statusCheck();
    }
  };

  checkIsDoneAll = () => {
    const todos = [...this.state.todos];
    const status = !todos.some(item => !item.isDone);
    this.setState({ isDoneAll: status });
  };
  countActiveTodo = () => {
    const num = JSON.parse(localStorage.getItem('todos')).filter(item => !item.isDone).length;
    this.setState({ countActiveTodos: num });
  };
  checkCompletedTodo = () => {
    const status = JSON.parse(localStorage.getItem('todos')).some(item => item.isDone);
    this.setState({ isCompletedAny: status });
  };
  statusCheck = () => {
    this.checkIsDoneAll();
    this.countActiveTodo();
    this.checkCompletedTodo();
  };
  render() {
    return (
      <div className="container">
        <div className="header">
          <MainInput
            todos={this.state.todos}
            addNewTodo={this.addTodo}
            addTodoValue={this.state.addTodoValue}
            todoCompleteAll={this.handleDoneAll}
            todoIsDoneAll={this.state.isDoneAll}
          />
        </div>
        <div className="main">
          {this.state.todos.map((todo, index) => (
            <Todo
              key={index + 1}
              todo={todo}
              todoDelete={this.handleDelete}
              todoComplete={this.handleDone}
            />
          ))}
        </div>
        <div className="footer">
          <Counter count={this.state.countActiveTodos} />
          <SortButtons />
          {this.state.isCompletedAny ? <ClearCompleted /> : ''}
        </div>
      </div>
    );
  }
}

export default Todos;
