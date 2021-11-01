import * as React from 'react';
import Button from './Filters__button';
import useStyles from './style';

interface Props {
  activeFilter: string;
  onChangeFilter: (filter: string) => void;
}

const Filters = ({ activeFilter, onChangeFilter }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
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
