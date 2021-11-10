import * as React from 'react';
import useStyles from './style';

interface Props {
  count: number;
}

const Counter = ({ count }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <span>{count} items left</span>
    </div>
  );
};

export default React.memo(Counter);
