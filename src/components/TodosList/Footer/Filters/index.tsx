import * as React from 'react';
import Button from './Filters__button';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  filters: {
    width: '45%',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

interface FiltersProps {
  activeFilter: string;
  onChangeFilter: (filter: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ activeFilter, onChangeFilter }) => {
  const classes = useStyles();
  return (
    <div className={classes.filters}>
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
