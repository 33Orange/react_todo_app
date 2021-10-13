import React from 'react';

class SortButtons extends React.Component {
  render() {
    return (
      <div className="sort-cont">
        <span className="sort-all">All</span>
        <span className="sort-active">Active</span>
        <span className="sort-completed">Completed</span>
      </div>
    );
  }
}

export default SortButtons;
