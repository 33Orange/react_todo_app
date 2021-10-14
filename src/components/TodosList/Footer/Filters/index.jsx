import React from 'react';
import './style.scss';
import Button from './Filters__button';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.buttons = ['All', 'Active', 'Completed'];
  }
  render() {
    return (
      <div className="filters">
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

export default Filters;
