import React from 'react';
import styled from 'styled-components';

const Button = styled.span`
  cursor: pointer;
  padding: 3px 5px;
  border-radius: 5px;
  &:hover {
    outline: 1px solid rgba(255, 0, 0, 0.2);
  }
  &.active {
    outline: 1px solid rgba(255, 0, 0, 0.4);
  }
`;

class SortButton extends React.Component {
  handleChangeFilter = () => {
    this.props.onChangeFilter(this.props.value);
  };
  render() {
    const filter = this.props.activeFilter;
    return (
      <Button
        onClick={this.handleChangeFilter}
        className={filter == this.props.value ? 'active' : null}
      >
        {this.props.value}
      </Button>
    );
  }
}

export default SortButton;
