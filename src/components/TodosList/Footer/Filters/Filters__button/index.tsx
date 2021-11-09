import * as React from 'react';
import { useCallback } from 'react';
import useStyles from './style';

interface Props {
  activeFilter: string;
  value: string;
  onChangeFilter: (filter: string) => void;
}

export default React.memo(function FiltersButton({ onChangeFilter, value, activeFilter }: Props) {
  const handleChangeFilter = useCallback(() => {
    onChangeFilter(value);
  }, []);

  const classes = useStyles();
  return (
    <span
      onClick={handleChangeFilter}
      className={activeFilter == value ? classes.button + ' active' : classes.button}
    >
      {value[0].toUpperCase() + value.slice(1)}
    </span>
  );
});
