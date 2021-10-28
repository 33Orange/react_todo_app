import * as React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  counter: {
    width: '25%',
    marginLeft: '1%',
    display: 'flex',
    alignItems: 'center',
  },
});
interface CounterProps {
  count: number;
}

const Counter: React.FC<CounterProps> = ({ count }) => {
  const classes = useStyles();
  return (
    <div className={classes.counter}>
      <span>{count} items left</span>
    </div>
  );
};

export default Counter;
