import React from 'react';
import './style.scss';
import Button from './SortButton';

class SortButtons extends React.Component {
  constructor(props) {
    super(props);
    this.buttons = ['All', 'Active', 'Completed'];
  }
  render() {
    return (
      <div className="sort-cont">
        {this.buttons.map((button, index) => (
          <Button
            key={button[index]}
            value={button}
            activeFilter={this.props.activeFilter}
            onChangeFilter={this.props.onChangeFilter}
          />
        ))}
      </div>
    );
  }
}

export default SortButtons;
