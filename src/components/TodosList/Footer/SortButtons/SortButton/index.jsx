import React from 'react';
import './style.scss';

class SortButton extends React.Component {
  handleChangeFilter = () => {
    this.props.onChangeFilter(this.props.value);
  };
  render() {
    const filter = this.props.activeFilter;
    return (
      <span
        onClick={this.handleChangeFilter}
        className={filter == this.props.value ? 'sort-btn active' : 'sort-btn'}
      >
        {this.props.value}
      </span>
    );
  }
}

export default SortButton;
