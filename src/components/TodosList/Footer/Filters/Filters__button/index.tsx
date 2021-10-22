import * as React from 'react';
import './style.scss';

interface FilterButtonProps {
  activeFilter: string;
  value: string;
  onChangeFilter: (arg0: string) => void;
}

class FiltersButton extends React.Component<FilterButtonProps> {
  handleChangeFilter = () => {
    this.props.onChangeFilter(this.props.value);
  };
  render() {
    const filter = this.props.activeFilter;
    return (
      <span
        onClick={this.handleChangeFilter}
        className={filter == this.props.value ? 'filters__button active' : 'filters__button'}
      >
        {this.props.value}
      </span>
    );
  }
}

export default FiltersButton;
