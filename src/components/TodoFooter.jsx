import Counter from './TodoCounter';
import SortButtons from './TodoSortBtns';
import ClearCompleted from './TodoClearCompl';
import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.isCompletedAny = this.props.todos.some(item => item.isDone);
    this.countActiveTodos = this.props.todos.filter(item => !item.isDone).length;
  }
  UNSAFE_componentWillUpdate() {
    this.isCompletedAny = this.props.todos.some(item => item.isDone);
    this.countActiveTodos = this.props.todos.filter(item => !item.isDone).length;
  }
  // componentDidUpdate() {
  //   const status = this.props.todos.some(item => item.isDone);
  //   console.log(status, this.isCompletedAny);
  //   const num = this.props.todos.filter(item => !item.isDone).length;
  //   if (this.isCompletedAny !== status) {
  //     this.isCompletedAny = status;
  //   }
  //   if (this.countActiveTodos !== num) {
  //     this.countActiveTodos = num;
  //   }
  // }
  render() {
    return (
      <div className="footer">
        <Counter count={this.countActiveTodos} />
        <SortButtons
          activeFilter={this.props.activeFilter}
          changeFilter={this.props.changeFilter}
        />
        {this.isCompletedAny ? (
          <ClearCompleted clearCompletedTodo={this.props.clearCompletedTodo} />
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default Footer;
