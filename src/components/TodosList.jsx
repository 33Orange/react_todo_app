import React from 'react';
import '../styles/TodoList.scss';
//Header / Main Input and Complete all button
import TodoInput from './Header/TodoInput';
//Main / Todo UL
import Todo from './Main/Todo';
//Footer / Status Bar
import Footer from './Footer/TodoFooter.jsx';

class TodosList extends React.Component {
  constructor(props) {
    super(props);
    this.todosJson = localStorage.getItem('todos');
    this.todos = this.todosJson ? JSON.parse(this.todosJson) : [];
    this.state = {
      todos: this.todos,
      filter: 'All',
    };
  }
  pushToLocalStorage = array => {
    localStorage.setItem('todos', JSON.stringify([...array]));
  };

  handleAddTodo = value => {
    if (value) {
      const todos = [...this.state.todos];
      todos.push({
        id: Math.random().toString(36).substr(2, 9),
        value: value,
        isDone: false,
      });
      this.pushToLocalStorage(todos);
      this.setState({ todos });
    }
  };

  handleDeleteTodo = todo => {
    const todos = this.state.todos.filter(item => item.id !== todo);
    this.pushToLocalStorage(todos);
    this.setState({ todos });
  };

  handleClearCompletedTodo = () => {
    const todos = this.state.todos.filter(item => !item.isDone);
    this.pushToLocalStorage(todos);
    this.setState({ todos });
  };

  handleDoneTodo = todo => {
    const todos = [...this.state.todos];
    todos.map(item => {
      if (item.id == todo.id) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    this.pushToLocalStorage(todos);
    this.setState({ todos });
  };

  handleCompleteAllTodos = () => {
    const todos = [...this.state.todos];
    todos.some(item => !item.isDone)
      ? todos.map(item => (item.isDone = true))
      : todos.map(item => (item.isDone = false));
    this.pushToLocalStorage(todos);
    this.setState({ todos });
  };

  handleEditTodoTitle = (todo, value) => {
    const todos = [...this.state.todos];
    const index = todos.findIndex(item => item.id == todo);
    todos[index].value = value;
    this.pushToLocalStorage(todos);
    this.setState({ todos });
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
      <div className="container">
        <h1 className="todos-app-title">todos</h1>
        <TodoInput
          todos={this.state.todos}
          addNewTodo={this.handleAddTodo}
          todoCompleteAll={this.handleCompleteAllTodos}
        />
        <div className="main">
          {filteredTodos.map((todo, index) => (
            <Todo
              key={todo.id}
              todo={todo}
              todoDelete={this.handleDeleteTodo}
              todoComplete={this.handleDoneTodo}
              todoEdit={this.handleEditTodoTitle}
            />
          ))}
        </div>
        <Footer
          todos={this.state.todos}
          activeFilter={this.state.filter}
          changeFilter={this.handleChangeFilter}
          clearCompletedTodo={this.handleClearCompletedTodo}
        />
      </div>
    );
  }
}

export default TodosList;
