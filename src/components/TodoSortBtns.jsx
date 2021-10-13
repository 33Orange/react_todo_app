import React from 'react';

class SortButtons extends React.Component {
  handleChangeFilter = e => {
    const filter = e.target.textContent.toString();
    this.props.changeFilter(filter);
  };
  render() {
    return (
      <div className="sort-cont">
        <span className="sort-all" onClick={this.handleChangeFilter}>
          All
        </span>
        <span className="sort-active" onClick={this.handleChangeFilter}>
          Active
        </span>
        <span className="sort-completed" onClick={this.handleChangeFilter}>
          Completed
        </span>
      </div>
    );
  }
}

export default SortButtons;
