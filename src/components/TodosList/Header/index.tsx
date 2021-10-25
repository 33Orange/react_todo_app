import * as React from 'react';
import './style.scss';
import { ITodo } from '../../../types/index';

interface HeaderProps {
  onAddTodo: (arg0: string) => void;
  onCompleteAllTodos: () => void;
  todos: Array<ITodo>;
}

interface HeaderState {
  value: string;
}

class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: e.target.value,
    });
  };
  handleAddTodo = () => {
    this.props.onAddTodo(this.state.value);
    this.setState({ value: '' });
  };

  handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code == 'Enter') {
      this.handleAddTodo();
    }
  };
  render() {
    const todos = [...this.props.todos];
    const isAllDone = !todos.some(item => !item.isDone);
    return (
      <div className="header">
        <div className="header__input-container">
          <input
            type="checkbox"
            className="header__completeAll-btn"
            id="header__completeAll-btn"
            checked={isAllDone}
            onChange={this.props.onCompleteAllTodos}
          />
          <label htmlFor="header__completeAll-btn" />
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            onKeyPress={this.handleEnterPress}
            className="header__input"
            placeholder="What needs to be done?"
          />
        </div>
      </div>
    );
  }
}

export default Header;
