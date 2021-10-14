import React from 'react';
import '../../styles/Footer/TodoSortBtns.scss';

class SortButtons extends React.Component {
  handleChangeFilter = e => {
    const filter = e.target.textContent.toString();
    this.props.changeFilter(filter);
  };
  render() {
    const filter = this.props.activeFilter;
    return (
      <div className="sort-cont">
        <span
          className={filter == 'All' ? 'sort-all active' : 'sort-all'}
          onClick={this.handleChangeFilter}
        >
          All
        </span>
        <span
          className={filter == 'Active' ? 'sort-active active' : 'sort-active'}
          onClick={this.handleChangeFilter}
        >
          Active
        </span>
        <span
          className={filter == 'Completed' ? 'sort-completed active' : 'sort-completed'}
          onClick={this.handleChangeFilter}
        >
          Completed
        </span>
      </div>
    );
  }
}

export default SortButtons;
