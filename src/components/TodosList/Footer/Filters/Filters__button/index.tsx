import * as React from 'react';
import useStyles from './style';

interface Props {
  activeFilter: string;
  value: string;
  onChangeFilter: (filter: string) => void;
}

const FiltersButton = ({ onChangeFilter, value, activeFilter }: Props) => {
  const handleChangeFilter = () => {
    onChangeFilter(value);
  };

  const classes = useStyles();
  return (
    <span
      onClick={handleChangeFilter}
      className={activeFilter == value ? classes.button + ' active' : classes.button}
    >
      {value[0].toUpperCase() + value.slice(1)}
    </span>
  );
};

export default React.memo(FiltersButton);
