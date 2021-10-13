import React from 'react';

class MainInput extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      defaultValue: '',
      value: this.props.addTodoValue,
      isDoneAll: this.props.todoCheckAll,
    };
    this.addTodo = this.addTodo.bind(this);
  }
  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };
  addTodo = () => {
    this.props.addNewTodo(this.state.value);
    this.setState({ value: '' });
  };
  render() {
    return (
      <div className="main-input-container">
        <input
          type="checkbox"
          className="complete-all"
          checked={!!this.props.todoIsDoneAll}
          onChange={() => this.props.todoCompleteAll()}
        ></input>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          onKeyPress={e => {
            if (e.code == 'Enter') {
              this.addTodo();
            }
          }}
          className="main-input"
          placeholder="What's to do?"
        ></input>
      </div>
    );
  }
}

export default MainInput;
