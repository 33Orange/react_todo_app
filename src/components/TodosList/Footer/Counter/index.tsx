import * as React from 'react';
import useStyles from './style';

interface Props {
  count: number;
}

export default React.memo(function Counter({ count }: Props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <span>{count} items left</span>
    </div>
  );
});
