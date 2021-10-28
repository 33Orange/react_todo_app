import * as React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  filters__button: {
    cursor: 'pointer',
    padding: '3px 5px',
    borderRadius: '5px',
    '&:hover': {
      outline: '1px solid rgba(255, 0, 0, 0.2)',
    },
    '&.active': {
      outline: '1px solid rgba(255, 0, 0, 0.4)',
    },
  },
});

interface FilterButtonProps {
  activeFilter: string;
  value: string;
  onChangeFilter: (filter: string) => void;
}

const FiltersButton: React.FC<FilterButtonProps> = ({ onChangeFilter, value, activeFilter }) => {
  const handleChangeFilter = () => {
    onChangeFilter(value);
  };
  const classes = useStyles();
  return (
    <span
      onClick={handleChangeFilter}
      className={
        activeFilter == value ? classes.filters__button + ' active' : classes.filters__button
      }
    >
      {value[0].toUpperCase() + value.slice(1)}
    </span>
  );
};

export default FiltersButton;
