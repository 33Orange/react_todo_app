import React from 'react';
import './style.scss';
import styled from 'styled-components';
//Header / Main Input and Complete all button
import Header from './Header';
//Todo UL
import Todo from './Todo';
//Footer / Status Bar
import Footer from './Footer';

const Container = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const AppTitle = styled.h1`
  text-align: center;
  font-size: 80px;
  font-weight: 300;
  color: rgba(255, 0, 0, 0.2);
  width: 100%;
  margin: 30px 0;
`;
const MainSection = styled.div`
  width: 100%;
  background: #fff;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.4);
`;
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

  handleCompleteTodo = todo => {
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

  handleEditTodo = (todo, value) => {
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
      <Container>
        <AppTitle>todos</AppTitle>
        <Header
          todos={this.state.todos}
          onAddTodo={this.handleAddTodo}
          onCompleteAllTodos={this.handleCompleteAllTodos}
        />
        <MainSection>
          {filteredTodos.map((todo, index) => (
            <Todo
              key={todo.id}
              todo={todo}
              onDeleteTodo={this.handleDeleteTodo}
              onCompletetodo={this.handleCompleteTodo}
              onEditTodo={this.handleEditTodo}
            />
          ))}
        </MainSection>
        <Footer
          todos={this.state.todos}
          activeFilter={this.state.filter}
          onChangeFilter={this.handleChangeFilter}
          onClearCompletedTodo={this.handleClearCompletedTodo}
        />
      </Container>
    );
  }
}

export default TodosList;
