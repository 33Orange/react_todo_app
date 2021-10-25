import * as React from 'react';
import './style.scss';
import Button from './Filters__button';

interface FiltersProps {
  activeFilter: string;
  onChangeFilter: (filter: string) => void;
}

class Filters extends React.Component<FiltersProps> {
  constructor(props: FiltersProps) {
    super(props);
  }

  render() {
    return (
      <div className="filters">
        {['all', 'active', 'completed'].map((button: string, index: number) => (
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
