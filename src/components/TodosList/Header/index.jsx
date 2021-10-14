import React from 'react';
import './style.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }
  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };
  handleAddTodo = () => {
    this.props.onAddTodo(this.state.value);
    this.setState({ value: '' });
  };
  handleEnterPress = e => {
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
