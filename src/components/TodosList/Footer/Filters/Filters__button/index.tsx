import * as React from 'react';
import './style.scss';

interface FilterButtonProps {
  activeFilter: string;
  value: string;
  onChangeFilter: (filter: string) => void;
}

const FiltersButton: React.FC<FilterButtonProps> = ({ onChangeFilter, value, activeFilter }) => {
  const handleChangeFilter = () => {
    onChangeFilter(value);
  };
  const filter = activeFilter;
  return (
    <span
      onClick={handleChangeFilter}
      className={filter == value ? 'filters__button active' : 'filters__button'}
    >
      {value}
    </span>
  );
};

export default FiltersButton;
