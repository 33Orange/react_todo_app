import * as React from 'react';
import './style.scss';
import Button from './Filters__button';

interface FiltersProps {
  activeFilter: string;
  onChangeFilter: (filter: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ activeFilter, onChangeFilter }) => {
  return (
    <div className="filters">
      {['all', 'active', 'completed'].map((button: string, index: number) => (
        <Button
          key={button[index]}
          value={button}
          activeFilter={activeFilter}
          onChangeFilter={onChangeFilter}
        />
      ))}
    </div>
  );
};

export default Filters;
